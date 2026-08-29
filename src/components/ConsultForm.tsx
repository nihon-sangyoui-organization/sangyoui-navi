"use client";

import { FormEvent, useState, type ReactNode } from "react";

const sizeOptions = ["50人未満", "50〜99人", "100〜999人", "1,000人以上", "未定・不明"];
const topicOptions = ["産業医の紹介相談", "衛生管理体制のコンサル相談", "どちらも"];

export function ConsultForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="border border-line bg-paper px-4 py-5 text-sm leading-relaxed text-muted">
        このフォームは見た目の確認用で、送信機能はまだありません。入力内容は送られていません。
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <p className="text-sm text-muted">
        送信機能は準備中です。公開後に受け付けを開始します。いまは項目の確認だけできます。
      </p>

      <Field label="組織名" htmlFor="org">
        <input id="org" name="org" type="text" className={inputClass} autoComplete="organization" />
      </Field>

      <Field label="担当者名" htmlFor="name">
        <input id="name" name="name" type="text" className={inputClass} autoComplete="name" />
      </Field>

      <Field label="事業場の規模（常時使用する労働者数の目安）" htmlFor="size">
        <select id="size" name="size" className={inputClass} defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          {sizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-navy-deep">相談の種類</legend>
        <div className="space-y-2">
          {topicOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm">
              <input type="radio" name="topic" value={option} className="accent-navy" />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="相談内容" htmlFor="message">
        <textarea id="message" name="message" rows={6} className={inputClass} />
      </Field>

      <Field label="連絡先（メールアドレス）" htmlFor="email">
        <input id="email" name="email" type="email" className={inputClass} autoComplete="email" />
      </Field>

      <button
        type="submit"
        className="border border-navy bg-navy px-5 py-2.5 text-sm text-white hover:bg-navy-deep"
      >
        内容を確認する（送信されません）
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy-deep">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full border border-line bg-white px-3 py-2 text-sm outline-none focus:border-navy";
