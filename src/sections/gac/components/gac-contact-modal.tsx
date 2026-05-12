"use client";

import { LoaderCircle, X } from "lucide-react";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useI18n } from "@/sections/gac/context/gac-i18n";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function GacContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const close = useCallback(() => {
    setName("");
    setPhone("");
    setState("idle");
    setErrorMessage("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, open]);

  if (!open) {
    return null;
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setState("error");
      setErrorMessage(t.contact.error);
      return;
    }

    setState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim() }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || t.contact.error);
      }

      setState("success");
      setName("");
      setPhone("");
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : t.contact.error);
    }
  };

  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-black/62 px-5 backdrop-blur-sm" role="presentation">
      <button className="absolute inset-0 cursor-default" type="button" aria-label={t.contact.close} onClick={close} />
      <section
        className="relative w-full max-w-[420px] bg-white px-6 py-6 text-[#171717] shadow-[0_24px_80px_rgba(0,0,0,0.32)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gac-contact-title"
      >
        <button
          className="absolute right-4 top-4 grid size-9 place-items-center text-black/60 transition hover:text-black"
          type="button"
          aria-label={t.contact.close}
          onClick={close}
        >
          <X className="size-5" strokeWidth={2.2} />
        </button>

        <h2 id="gac-contact-title" className="pr-10 text-[24px] font-bold leading-tight">
          {t.contact.title}
        </h2>
        <p className="mt-2 text-sm leading-5 text-black/58">{t.contact.description}</p>

        <form className="mt-6 grid gap-4" onSubmit={submit}>
          <label className="grid gap-2 text-sm font-semibold">
            {t.contact.name}
            <input
              className="h-12 w-full border border-black/14 px-4 text-base font-medium outline-none transition focus:border-black"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold">
            {t.contact.phone}
            <input
              className="h-12 w-full border border-black/14 px-4 text-base font-medium outline-none transition focus:border-black"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              autoComplete="tel"
              inputMode="tel"
              required
            />
          </label>

          <button
            className="mt-2 inline-flex h-12 items-center justify-center bg-black px-6 text-sm font-bold text-white transition hover:bg-black/82 disabled:cursor-not-allowed disabled:bg-black/45"
            type="submit"
            disabled={state === "submitting"}
          >
            {state === "submitting" ? <LoaderCircle className="size-5 animate-spin" strokeWidth={2.2} /> : t.contact.submit}
          </button>

          {state === "success" ? <p className="text-sm font-semibold text-emerald-700">{t.contact.success}</p> : null}
          {state === "error" ? <p className="text-sm font-semibold text-red-600">{errorMessage || t.contact.error}</p> : null}
        </form>
      </section>
    </div>
  );
}
