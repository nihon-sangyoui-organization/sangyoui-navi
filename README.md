# 日本産業医機構ポータル

産業医・産業保健に関する中立の情報拠点です。宣伝サイトではありません。  
運営: 日本産業医機構

GitHub: https://github.com/nihon-sangyoui-organization/sangyoui-navi

## 原則

- 入口は企業向けと産業医向けの2つ
- 企業向けに産業医アカデミーを出さない
- 産業医向けに紹介サービスの営業を出さない
- アカデミーの売り込み文は `/for-doctors/learn/` とアカデミー本体に限る
- 法令は一次情報へリンクする
- 独自ドメイン移行を前提にする（`NEXT_PUBLIC_BASE_PATH` で GitHub Pages のサブパスにも切り替え可）

詳細は [AGENTS.md](./AGENTS.md) を読んでください。

## 開発

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

静的書き出し:

```bash
npm run build
```

出力は `out/` です。独自ドメインでは basePath を空のまま使います。GitHub Pages のプロジェクトサイトで出すときは、例:

```bash
set NEXT_PUBLIC_BASE_PATH=/sangyoui-navi
npm run build
```

（PowerShell なら `$env:NEXT_PUBLIC_BASE_PATH="/sangyoui-navi"`）
