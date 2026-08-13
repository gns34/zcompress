# zcompressor.com — SEO Page Expansion, Round 2

**Scope:** New URLs only. Does not repeat the 9 pages already built (UPSC, /compress-pdf-to-100/200/500kb, /1mb, /compress-pdf-to-300kb, /merge-and-compress-pdf, /vs/smallpdf, /vs/ilovepdf).

**How to read the verification column:**
- ✅ Verified — real numbers, cross-checked against 2+ independent sources during research
- ⚠️ Pattern-inferred — same portal family or exam body as a verified page, numbers likely similar but not independently confirmed for this specific exam/portal — check the current notification before publishing
- ❌ Unverified — no size data found in this research pass; do not publish a specific KB number without checking the live source first (a wrong number here causes real application rejections)

---

## Master list (28 URLs)

| # | URL | Category | Pain point | Spec data | Status |
|---|---|---|---|---|---|
| 1 | `/compress-pdf-for-nsp-scholarship` | Scholarship | Central scholarship portal, Sept–Nov cycle, huge student search volume | All docs (Aadhaar, income cert, category cert, marksheet, enrollment cert) PDF or JPG, **under 200 KB each** | ✅ |
| 2 | `/compress-pdf-for-mahadbt-scholarship` | Scholarship | Maharashtra state scholarship portal | Likely same 200 KB band as NSP — competitor tooling treats it identically | ⚠️ |
| 3 | `/compress-pdf-for-up-scholarship` | Scholarship | UP state scholarship portal | Likely same 200 KB band | ⚠️ |
| 4 | `/compress-pdf-for-bihar-scholarship` | Scholarship | Bihar state scholarship portal | Likely same 200 KB band | ⚠️ |
| 5 | `/compress-pdf-for-josaa-jee-counseling` | Admissions | IIT/NIT/IIIT seat allotment doc upload, high-stress narrow windows (10–12 days per round) | Category/PwD certificate PDF **50–300 KB** (same band as UPSC); general docs commonly capped ~500 KB–1 MB depending on round | ✅ |
| 6 | `/compress-pdf-for-neet-counseling` | Admissions | MCC counseling document upload | NTA runs both JEE and NEET; anecdotal reports suggest a similar band to JoSAA but not independently confirmed | ⚠️ |
| 7 | `/compress-pdf-for-cuet-counseling` | Admissions | Central university admission document upload | Not found this pass | ❌ |
| 8 | `/compress-pdf-for-nda-cds` | Exam | NDA/CDS applications run through UPSC's own portal | Reasonable to assume UPSC's 20–300 KB banding applies since it's the same OTR system — confirm before publishing | ⚠️ |
| 9 | `/compress-pdf-for-state-psc-exams` | Exam (hub) | MPSC/TNPSC/KPSC/WBPSC/BPSC candidates searching a generic term rather than one state name | No single spec — build as a hub page linking to state-specific pages once verified, not a page with a hard number | ❌ |
| 10 | `/compress-pdf-for-email` | Generic | Email attachment limits (varies by provider/recipient policy) | N/A — evergreen, no exam-specific number needed | N/A |
| 11 | `/compress-pdf-for-resume` | Generic | Job portals / ATS systems with upload caps | N/A | N/A |
| 12 | `/compress-pdf-on-mobile` | Generic | "compress pdf on phone" — distinct search pattern, mobile-first workflow | N/A | N/A |
| 13 | `/compress-pdf-for-whatsapp` | Generic | Document sharing via WhatsApp | N/A | N/A |
| 14 | `/compress-pdf-without-losing-quality` | Generic | Quality-anxious searchers, broad head term | N/A | N/A |
| 15 | `/compress-scanned-pdf` | Generic | Scanned docs compress differently than native PDFs — distinct technical angle | N/A | N/A |
| 16 | `/batch-compress-pdf` | Generic/Feature | Multiple files at once — only buildable if the tool actually supports batch | Depends on tool capability — flag to confirm feature exists before publishing the page | N/A |
| 17 | `/reduce-pdf-file-size` | Generic (pillar) | High-volume generic head term, anchors internal linking to all the niche pages | N/A | N/A |
| 18 | `/blog/why-is-my-pdf-still-too-large` | Content hub | Explains compression limits (already-compressed images, embedded fonts) | N/A | N/A |
| 19 | `/blog/kb-vs-kib-file-size-explained` | Content hub | Directly answers a real rejection cause noted on the `/300kb` page — binary vs decimal KB | N/A | N/A |
| 20 | `/blog/how-to-scan-documents-for-government-portals` | Content hub | Pre-compression step — scanning app settings, DPI choice | N/A | N/A |
| 21 | `/blog/pdf-compression-lossy-vs-lossless` | Content hub | Builds topical authority, links out to all size-target pages | N/A | N/A |
| 22 | `/blog/common-document-upload-rejection-reasons` | Content hub | Aggregates rejection causes across exams — strong internal linking hub | N/A | N/A |
| 23 | `/hi/compress-pdf-for-nsp-scholarship` | Hindi | Hinglish/Hindi version — competitor already ranks with Hinglish content in this exact category | Same data as #1 | ✅ (data), build = new |
| 24 | `/hi/compress-pdf-for-upsc` | Hindi | Hindi version of your existing highest-value page | Same data as already-built UPSC page | ✅ (data), build = new |
| 25 | `/vs/sejda` | Comparison | Sejda is a common alternative in this search category | N/A | N/A |
| 26 | `/vs/adobe-acrobat-compress` | Comparison | Adobe's free online compressor — high-authority competitor, worth a direct comparison | N/A | N/A |
| 27 | `/compress-pdf-for-passport-seva` | Govt service | Passport document uploads | Not verified this pass — do not publish a number without checking Passport Seva's current portal | ❌ |
| 28 | `/compress-pdf-for-income-tax-efiling` | Govt service | Form 16 / ITR document attachments | Not verified this pass | ❌ |

---

## Explicitly excluded — don't build

**Railway RRB (any exam: Group D, NTPC, ALP, JE)** — confirmed this round: RRB's entire document set is **image-based** (photo 15–40 KB, signature 10–20/30–50 KB depending on post, category certificates as JPG 50–100 KB). There is no PDF pain point here. Building a `/compress-pdf-for-railway` page would target the wrong file type entirely — this is an image-resizer opportunity, not a fit for the current PDF tool.

---

## Detail: the two strongest new pages

### `/compress-pdf-for-nsp-scholarship`
- **Numbers:** All documents (Aadhaar, bank passbook, category certificate, income certificate, marksheet, enrollment certificate, AISHE code doc) — PDF or JPG, **under 200 KB per file**
- **Content that avoids thin-content risk:** table of the 6+ required documents by name (not generic "your documents"), a note that this is a *lower* limit than UPSC's 300 KB so the same source scan needs more aggressive compression, and the specific recurring failure mode — students scanning at full color/high DPI producing 2MB+ files against a 200 KB cap
- **Seasonal note:** portal is active roughly September–November; content and any "last date" mentions need a yearly refresh cycle, not one-and-done copy
- Tool default: 200 KB

### `/compress-pdf-for-josaa-jee-counseling`
- **Numbers:** category/PwD certificate PDFs 50–300 KB (identical band to your UPSC page — good internal-linking opportunity between the two); general document caps vary by round but commonly land 500 KB–1 MB
- **Content angle:** this audience is mid-counseling, under a 10–12 day round deadline, often needing to **combine multiple certificates into one PDF** before compressing — direct internal link to `/merge-and-compress-pdf`
- Tool default: 300 KB, with a callout linking to the merge tool for multi-document rounds

---

## Rollout priority

1. `/compress-pdf-for-nsp-scholarship` — verified data, large recurring audience, direct competitor validation
2. `/compress-pdf-for-josaa-jee-counseling` — verified data, links cleanly to two pages you already built
3. Content hub posts (#18–22) — cheap to build, back every numbered page's FAQ with real internal links, lowest risk
4. `/hi/` versions of your two strongest pages (#23–24) — biggest untapped wedge, but requires translation/localization resourcing, so sequence after the above
5. Generic pages (#10–17) — steady baseline traffic, build opportunistically
6. `/vs/sejda`, `/vs/adobe-acrobat-compress` — lowest priority
7. Everything marked ❌ — hold until you or an agent independently verifies current numbers; don't publish placeholder specs
