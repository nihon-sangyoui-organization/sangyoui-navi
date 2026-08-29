export const site = {
  name: "日本産業医機構",
  tagline: "産業保健の情報拠点",
  description:
    "産業保健の実務情報を、企業と産業医それぞれに分けて整理する中立の情報拠点です。",
  academyUrl: "https://doctors-concierge.com/lp/op_ws.html",
  academyName: "産業医アカデミー",
} as const;

export type Audience = "company" | "doctors";

export const officialLinks = {
  anzenEiseiHo: {
    label: "労働安全衛生法（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/347AC0000000057",
  },
  anzenEiseiRei: {
    label: "労働安全衛生法施行令（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/347CO0000000318",
  },
  anzenEiseiKisoku: {
    label: "労働安全衛生規則（e-Gov 法令検索）",
    href: "https://laws.e-gov.go.jp/law/347M50002000032",
  },
  stressCheck: {
    label: "ストレスチェック制度について（こころの耳／厚生労働省）",
    href: "https://kokoro.mhlw.go.jp/etc/kaiseianeihou/",
  },
  stressCheckSmall: {
    label: "労働者数50人未満の事業場のストレスチェック（こころの耳）",
    href: "https://web2.kokoro.mhlw.go.jp/etc/small-sc/",
  },
  stressCheckMhlwSmall: {
    label: "労働者数50人未満の小規模事業者の方（厚生労働省）",
    href: "https://www.mhlw.go.jp/stf/newpage_70761.html",
  },
  returnToWork: {
    label: "職場復帰支援（職場のあんぜんサイト／厚生労働省）",
    href: "https://anzeninfo.mhlw.go.jp/yougo/yougo84_1.html",
  },
  returnToWorkGuide: {
    label: "心の健康問題により休業した労働者の職場復帰支援の手引き（PDF）",
    href: "https://kokoro.mhlw.go.jp/guideline/files/H23_Return.pdf",
  },
  interviewGuidance: {
    label: "長時間労働者、高ストレス者の面接指導について（こころの耳）",
    href: "https://web2.kokoro.mhlw.go.jp/mensetsushidou/",
  },
  interviewManual: {
    label: "長時間労働者、高ストレス者の面接指導に関する報告書・意見書作成マニュアル（厚生労働省 PDF）",
    href: "https://www.mhlw.go.jp/content/001673445.pdf",
  },
  jmaCertified: {
    label: "日本医師会認定産業医制度（全国医師会産業医部会連絡協議会）",
    href: "https://www.sangyo-doctors.gr.jp/Institution",
  },
  jmaContractGuide: {
    label: "産業医契約書の手引き（日本医師会 PDF）",
    href: "https://www.med.or.jp/dl-med/doctor/ssi/sangyotool1a.pdf",
  },
} as const;
