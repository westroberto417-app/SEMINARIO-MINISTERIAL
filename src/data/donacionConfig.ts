export interface DonacionData {
  titulo: string;
  subtitulo: string;
  frasePrincipal: string;
  titular: string;
  alias: string;
  cvu: string;
  email: string;
  banco: string;
  cuitCuil?: string;
  mercadoPagoLink?: string;
  notaAgradecimiento: string;
  versiculo: string;
  versiculoCita: string;
}

export const DONACION_DEFAULT: DonacionData = {
  titulo: "Invitame un Cafecito",
  subtitulo: "Capacitación Cristiana Bíblica — Seminario Ministerial",
  frasePrincipal: "Si este material está bendiciendo tu vida colabora con nosotros para seguir llevando este material a muchos más",
  titular: "Esteban West",
  alias: "westtecnobell",
  cvu: "0000003100067616194578",
  email: "WESTesteban@gmail.com",
  banco: "Mercado Pago",
  cuitCuil: "20-XXXXXXXX-X",
  mercadoPagoLink: "https://www.mercadopago.com.ar",
  notaAgradecimiento: "Tu colaboración voluntaria hace posible sostener la plataforma digital, los costos de servidores y continuar produciendo más materiales bíblicos gratuitos y accesibles para toda la comunidad.",
  versiculo: "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.",
  versiculoCita: "2 Corintios 9:7"
};

const STORAGE_KEY = 'capacitacion_donacion_config_v2';

export function getDonacionData(): DonacionData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DONACION_DEFAULT;
    const parsed = JSON.parse(raw);
    // If the stored alias was the placeholder, override with real data
    if (parsed.alias === 'esteban.west.mp' || !parsed.alias) {
      return DONACION_DEFAULT;
    }
    // Fix previously broken link.mercadopago.com.ar
    if (!parsed.mercadoPagoLink || parsed.mercadoPagoLink.includes('link.mercadopago.com.ar')) {
      parsed.mercadoPagoLink = 'https://www.mercadopago.com.ar';
    }
    return { ...DONACION_DEFAULT, ...parsed };
  } catch {
    return DONACION_DEFAULT;
  }
}

export function saveDonacionData(data: Partial<DonacionData>): DonacionData {
  try {
    const current = getDonacionData();
    const updated = { ...current, ...data };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return DONACION_DEFAULT;
  }
}

export function resetDonacionData(): DonacionData {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
  return DONACION_DEFAULT;
}
