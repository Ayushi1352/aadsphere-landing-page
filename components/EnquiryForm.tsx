"use client";

import { useState } from "react";
import { site, type AdSphereEnquiryFormData, type SectionProps } from "@/data";
import { useDummySubmit } from "@/components/useDummySubmit";
import Icon from "@/components/Icon";
import FormSuccess, { Spinner } from "@/components/FormSuccess";

/** Soft form fields */
const base =
  "w-full min-w-0 appearance-none rounded-xl border border-line bg-page px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-subtle focus:border-brand max-sm:px-3 max-sm:placeholder:text-xs";
/** single-line fields and selects share one height */
const field = `${base} h-11`;

function SelectField({ name, placeholder, options, required, className = "" }: { name: string; placeholder: string; options: string[]; required?: boolean; className?: string }) {
  const [value, setValue] = useState("");

  return (
    <div className={`relative ${className}`}>
      <select
        name={name}
        required={required}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        aria-label={placeholder}
        // shows the placeholder grey until an option is picked
        className={`${field} cursor-pointer pr-8 max-sm:text-xs ${value === "" ? "text-subtle" : "text-ink"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-ink">
            {option}
          </option>
        ))}
      </select>
      <Icon name="chevron-down" className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-brand" />
    </div>
  );
}

/** The quote request form in the contact section */
export default function EnquiryForm({ data: form = site.enquiryFormSection }: SectionProps<AdSphereEnquiryFormData>) {
  const submit = useDummySubmit();
  const { fields } = form;

  return (
    <>
      {/* remounting the form (via key) after each send clears every field, including the controlled selects */}
      <form
        key={submit.round}
        onSubmit={submit.onSubmit}
        onInput={submit.onInput}
        aria-busy={submit.sending}
        // from tablet up the message box takes up any spare height of the contact section card
        className="mt-4 grid grid-cols-2 gap-2.5 md:flex-1 md:grid-rows-[repeat(5,auto)_1fr_auto] lg:grid-rows-[repeat(4,auto)_1fr_auto]"
      >
        <input name="name" required placeholder={fields.name} aria-label={fields.name} autoComplete="name" className={field} />
        <input name="phone" type="tel" required placeholder={fields.phone} aria-label={fields.phone} autoComplete="tel" className={field} />
        <input name="email" type="email" required placeholder={fields.email} aria-label={fields.email} autoComplete="email" className={`${field} max-sm:col-span-2`} />
        <input name="company" placeholder={fields.company} aria-label={fields.company} autoComplete="organization" className={`${field} max-sm:col-span-2`} />
        <SelectField name="service" placeholder={fields.service} options={form.serviceOptions} required className="col-span-2" />
        <SelectField name="budget" placeholder={fields.budget} options={form.budgetOptions} className="max-lg:col-span-2" />
        <SelectField name="timeline" placeholder={fields.timeline} options={form.timelineOptions} className="max-lg:col-span-2" />
        <textarea
          name="details"
          required
          rows={2}
          placeholder={fields.details}
          aria-label={fields.details}
          className={`${base} col-span-2 resize-y py-3 md:h-full`}
        />
        <button
          type="submit"
          disabled={submit.sending}
          className="col-span-2 flex h-12 items-center justify-center gap-3 rounded-lg border border-brand bg-brand font-display font-bold text-white transition-colors hover:bg-white hover:text-brand disabled:cursor-wait disabled:opacity-80 disabled:hover:bg-brand disabled:hover:text-white"
        >
          {submit.sending ? (
            <>
              <Spinner className="size-5" />
              {form.sending}
            </>
          ) : (
            <>
              {form.button}
            </>
          )}
        </button>
      </form>
      {submit.showMessage && (
        <FormSuccess
          name={submit.name}
          title={form.successTitle}
          message={form.success}
          leaving={submit.status === "leaving"}
          visibleFor={submit.visibleFor}
          onClose={submit.dismiss}
          closeLabel={form.closeLabel}
          className="mt-4"
        />
      )}
    </>
  );
}
