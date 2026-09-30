import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  ExternalLink,
  Edit3,
  RotateCcw,
  Save,
  Info
} from 'lucide-react';
import { useDonacion } from '../context/DonacionContext';
import AnimatedCoffeeIcon from './AnimatedCoffeeIcon';

export default function CafecitoModal() {
  const { isOpen, closeDonacion, donacionData, updateData, resetData } = useDonacion();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    titular: donacionData.titular,
    alias: donacionData.alias,
    cvu: donacionData.cvu,
    email: donacionData.email,
    cuitCuil: donacionData.cuitCuil || '',
    mercadoPagoLink: donacionData.mercadoPagoLink || '',
  });

  useEffect(() => {
    setEditForm({
      titular: donacionData.titular,
      alias: donacionData.alias,
      cvu: donacionData.cvu,
      email: donacionData.email,
      cuitCuil: donacionData.cuitCuil || '',
      mercadoPagoLink: donacionData.mercadoPagoLink || '',
    });
  }, [donacionData, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeDonacion();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeDonacion]);

  if (!isOpen) return null;

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2500);
    } catch {
      // Fallback
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const copyAllData = () => {
    const text = `*DATOS PARA TRANSFERENCIA / COLABORACIÓN:*
• Entidad: ${donacionData.banco} (Argentina)
• Titular: ${donacionData.titular}
• Alias: ${donacionData.alias}
• CVU: ${donacionData.cvu}
• Email: ${donacionData.email}
${donacionData.cuitCuil ? `• CUIT/CUIL: ${donacionData.cuitCuil}\n` : ''}
¡Muchas gracias por bendecir el ministerio de Capacitación Bíblica!`;

    copyToClipboard(text, 'all');
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    updateData(editForm);
    setIsEditing(false);
  };

  const handleResetToDefault = () => {
    resetData();
    setIsEditing(false);
  };

  const handleOpenMercadoPago = () => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(donacionData.alias);
        setCopiedField('alias');
        setTimeout(() => setCopiedField(null), 3000);
      }
    } catch {
      // Ignore
    }
  };

  const activeMercadoPagoUrl =
    donacionData.mercadoPagoLink && !donacionData.mercadoPagoLink.includes('link.mercadopago.com.ar')
      ? donacionData.mercadoPagoLink
      : 'https://www.mercadopago.com.ar';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cafecito-modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/10 overflow-hidden my-6 transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header Banner with warm gradient */}
        <div className="relative bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 px-6 py-6 text-white overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -right-8 -top-8 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-amber-500/20 rounded-full blur-xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={closeDonacion}
            className="absolute top-4 right-4 rounded-full p-2 text-white/80 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3.5 pr-8">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-400/25 border border-amber-300/40 text-amber-200 shadow-inner">
              <AnimatedCoffeeIcon size="md" steamColor="#FEF3C7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400/25 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-amber-100">
                  Gracias por...
                </span>
              </div>
              <h2 id="cafecito-modal-title" className="font-heading text-xl sm:text-2xl font-bold leading-tight text-white mt-1">
                Colaborar con el Ministerio
              </h2>
              <p className="text-xs text-amber-100/90 font-medium">
                Pastores Esteban West &amp; Jorgelina González
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[calc(85vh-120px)] overflow-y-auto">
          {/* Mercado Pago Account Card */}
          <div className="rounded-2xl border border-sky-200 bg-gradient-to-b from-sky-50/70 to-white p-4 sm:p-5 shadow-xs space-y-3.5">
            {/* Mercado Pago Badge Header */}
            <div className="flex items-center justify-between border-b border-sky-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#009EE3] text-white shadow-xs font-bold text-xs">
                  MP
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold tracking-tight text-slate-800">
                      Mercado Pago Argentina
                    </span>
                    <span className="rounded-full bg-sky-100 px-1.5 py-0.2 text-[10px] font-semibold text-sky-800">
                      Cuenta Oficial
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500">Transferencias inmediatas sin comisión</span>
                </div>
              </div>

              {/* Edit button */}
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-sky-700 bg-white hover:bg-sky-50 px-2 py-1 rounded-lg border border-slate-200 hover:border-sky-300 transition-colors cursor-pointer"
                title="Ajustar datos de cuenta"
              >
                <Edit3 className="h-3 w-3" />
                <span>{isEditing ? 'Cancelar' : 'Ajustar'}</span>
              </button>
            </div>

            {/* Editable Form */}
            {isEditing ? (
              <form onSubmit={handleSaveEdit} className="space-y-3 pt-2 text-left">
                <div className="rounded-xl bg-amber-50 p-2.5 text-xs text-amber-800 border border-amber-200 flex items-start gap-2">
                  <Info className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Puedes personalizar aquí tu Alias, CVU o Titular si necesitas ajustar algún dato de tu captura. Se guardará en este dispositivo.</span>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Titular de la Cuenta:</label>
                  <input
                    type="text"
                    value={editForm.titular}
                    onChange={e => setEditForm({ ...editForm, titular: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs focus:border-sky-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Alias de Mercado Pago:</label>
                  <input
                    type="text"
                    value={editForm.alias}
                    onChange={e => setEditForm({ ...editForm, alias: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-mono focus:border-sky-500 focus:outline-none"
                    placeholder="ej: esteban.west.mp"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">CVU (22 dígitos):</label>
                  <input
                    type="text"
                    value={editForm.cvu}
                    onChange={e => setEditForm({ ...editForm, cvu: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-mono focus:border-sky-500 focus:outline-none"
                    placeholder="0000003100085462846193"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Email asociado:</label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={e => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Link de Mercado Pago (web o link de cobro):
                  </label>
                  <input
                    type="url"
                    value={editForm.mercadoPagoLink}
                    onChange={e => setEditForm({ ...editForm, mercadoPagoLink: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs focus:border-sky-500 focus:outline-none"
                    placeholder="https://www.mercadopago.com.ar"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={handleResetToDefault}
                    className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 cursor-pointer"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Restablecer</span>
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
                  >
                    <Save className="h-3.5 w-3.5" />
                    <span>Guardar datos</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Display mode with copy buttons */
              <div className="space-y-2.5">
                {/* Titular */}
                <div className="flex items-center justify-between rounded-xl bg-white p-2.5 border border-slate-200/80">
                  <div className="min-w-0 pr-2">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Titular
                    </span>
                    <span className="block text-xs font-bold text-slate-800 truncate">
                      {donacionData.titular}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">Mercado Pago</span>
                </div>

                {/* ALIAS */}
                <div className="flex items-center justify-between rounded-xl bg-white p-2.5 border border-sky-200/80 shadow-2xs hover:border-sky-300 transition-colors">
                  <div className="min-w-0 pr-2">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-sky-700">
                      Alias Mercado Pago (Recomendado)
                    </span>
                    <span className="block font-mono text-xs sm:text-sm font-bold text-slate-900 truncate selection:bg-sky-100">
                      {donacionData.alias}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(donacionData.alias, 'alias')}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${
                      copiedField === 'alias'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200'
                    }`}
                  >
                    {copiedField === 'alias' ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                {/* CVU */}
                <div className="flex items-center justify-between rounded-xl bg-white p-2.5 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors">
                  <div className="min-w-0 pr-2">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      CVU (Clave Virtual Uniforme)
                    </span>
                    <span className="block font-mono text-xs font-bold text-slate-800 truncate selection:bg-slate-100">
                      {donacionData.cvu}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(donacionData.cvu, 'cvu')}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${
                      copiedField === 'cvu'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {copiedField === 'cvu' ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Email */}
                {donacionData.email && (
                  <div className="flex items-center justify-between rounded-xl bg-white p-2.5 border border-slate-200/80">
                    <div className="min-w-0 pr-2">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        Email Vinculado
                      </span>
                      <span className="block text-xs font-medium text-slate-700 truncate">
                        {donacionData.email}
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(donacionData.email, 'email')}
                      className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${
                        copiedField === 'email'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                      }`}
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={copyAllData}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 py-2.5 px-3 text-xs font-semibold text-slate-700 shadow-2xs transition-colors cursor-pointer"
              >
                {copiedField === 'all' ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">¡Datos copiados!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-500" />
                    <span>Copiar todos los datos</span>
                  </>
                )}
              </button>

              <a
                href={activeMercadoPagoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOpenMercadoPago}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#009EE3] hover:bg-[#0081B8] text-white py-2.5 px-3 text-xs font-bold shadow-xs hover:shadow-sm transition-all cursor-pointer"
                title="Abrir Mercado Pago (copia el Alias automáticamente)"
              >
                <span>Ir a Mercado Pago</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Quick steps */}
          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80 space-y-2 text-xs text-slate-600">
            <span className="font-bold text-slate-800 block text-xs">
              ¿Cómo colaborar desde tu celular o computadora?
            </span>
            <ol className="list-decimal pl-4 space-y-1 text-[11px] leading-relaxed">
              <li>Copia el <strong>Alias</strong> (<span className="font-mono">{donacionData.alias}</span>) o el <strong>CVU</strong>.</li>
              <li>Abre tu app de <strong>Mercado Pago</strong> o tu cuenta de banco (Galicia, Santander, BBVA, Ualá, Cuenta DNI, MODO, etc.).</li>
              <li>Elige la opción <strong>Transferir dinero</strong> y pega el Alias o CVU.</li>
              <li>Indica el importe voluntario que sientas aportar para sostener esta obra ministerial.</li>
            </ol>
          </div>

          {/* Biblical Scripture Quote */}
          <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-3 text-center">
            <p className="font-serif text-xs italic text-amber-900 leading-relaxed">
              &ldquo;{donacionData.versiculo}&rdquo;
            </p>
            <span className="block text-[11px] font-bold text-amber-800 mt-1">
              — {donacionData.versiculoCita}
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-100 bg-slate-50/80 px-6 py-3.5 flex items-center justify-end">
          <button
            type="button"
            onClick={closeDonacion}
            className="rounded-xl bg-slate-200 hover:bg-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
