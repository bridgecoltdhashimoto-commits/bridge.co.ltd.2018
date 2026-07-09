# 株式会社BRIDGE 公式サイト整理メモ

このリポジトリは、現在は **車の修理・売却・廃車・乗り換え・ローン不安の判断ナビ** として運用します。

## 現在の主要公開ページ

| 種別 | ファイル | 役割 |
|---|---|---|
| トップ | `index.html` | 車系判断ナビの入口 |
| 修理判断 | `car-repair-or-sell.html` | 修理するか、売るか、廃車も含めて比較するページ |
| 廃車判断 | `haisha-accident-car.html` | 事故車・不動車・車検切れの判断ページ |
| 輸入車判断 | `import-car-sell.html` | 輸入車の維持費・売却判断ページ |
| 維持費判断 | `keep-or-sell-car.html` | 乗り続けるか、手放すかの判断ページ |
| ローン/リース判断 | `car-loan-lease-guide.html` | ローン審査不安・カーリース・自社ローン関連の比較ページ |
| 共通CSS | `css/car-guide.css` | 車系判断ナビ全体の共通デザイン |

## 画像配置ルール

車系ページで使う画像は、今後は以下に集約します。

```txt
assets/car-guide/
```

想定ファイル名：

```txt
hero-home.jpg
case-repair.jpg
case-haisha.jpg
case-import.jpg
case-keep.jpg
case-loan.jpg
case-services.jpg
service-satei.jpg
service-haisha.jpg
service-import.jpg
service-lease.jpg
service-loan.jpg
page-repair-hero.jpg
page-haisha-hero.jpg
page-import-hero.jpg
page-keep-hero.jpg
page-loan-hero.jpg
```

CSSから読む場合は、`css/car-guide.css` から見て以下の形にします。

```css
background-image: url("../assets/car-guide/hero-home.jpg");
```

## 旧ページの扱い

以下は、過去の会社LP・旧商品ページ・旧導線です。現在の車系判断ナビとは直接関係しないため、公開導線からは外します。

- `company.html`
- `contact.html`
- `services.html`
- `works.html`
- `auto-delivery-beta.html`
- `panic-firewall-mini.html`
- `panic-nav-sample.html`
- `proofpack-starter.html`
- `proofpack-lite-preview.html`
- `purchase-policy.html`

旧URLからアクセスされた場合は、原則として `index.html` へ誘導します。

## 重要な運用方針

- 19.8万円商品、デジタル商品、自動納品商品、ProofPack系は車系トップの公開導線に載せない。
- 電話相談、LINE相談、個別見積判断、ローン審査代行、買取代行、廃車代行の導線は設置しない。
- 本ページは広告リンクを含む情報ページとして運用する。
- 株式会社BRIDGEは各サービスの提供会社ではないことを明記する。
- A8広告リンクの `href` と 1px計測画像の `img src` は変更しない。
- 公開ページでは「広告リンク」「PRリンク」「PR / 外部サービス」の表記を基本にする。

## 次に画像を入れる場合

1. `assets/car-guide/` に画像をアップロードする。
2. `css/car-guide.css` の背景画像指定を `../assets/car-guide/ファイル名` にする。
3. PC/スマホで表示確認する。
4. GitHub Pagesの公開URLを確認する。
