# NCOGA self-hosted fonts

The Phase 2 preview uses variable, normal-style Latin and Latin Extended WOFF2 subsets of **DM Sans** and **Newsreader**. The files were retrieved on 2026-10-15 from the official Google Fonts stylesheet for modern Chromium. CSS loads the subsets by Unicode range and uses `font-display: swap`. The site makes no runtime request to Google Fonts.

| Local file                   | Source                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| `dm-sans-latin.woff2`        | `https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2`            |
| `dm-sans-latin-ext.woff2`    | `https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6h9Q.woff2`         |
| `newsreader-latin.woff2`     | `https://fonts.gstatic.com/s/newsreader/v26/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ.woff2`    |
| `newsreader-latin-ext.woff2` | `https://fonts.gstatic.com/s/newsreader/v26/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbDJYQraA.woff2` |

Both families are distributed under the SIL Open Font License 1.1. The accompanying copyright notices and license texts are retained as [`OFL-DM-Sans.txt`](OFL-DM-Sans.txt) and [`OFL-Newsreader.txt`](OFL-Newsreader.txt). Official project records: [DM Sans](https://github.com/google/fonts/tree/main/ofl/dmsans) and [Newsreader](https://github.com/google/fonts/tree/main/ofl/newsreader).

The browser test exercises both basic Latin and the Latin Extended characters `ƐƆŋ`. If future content needs another script or italic styles, source and test those files before use.
