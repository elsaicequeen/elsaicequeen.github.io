window.CASE_DATA_003 = {
 "meta": {
  "title": "Laundering trail of the February 2025 Bybit cold-wallet theft",
  "caseNo": "003",
  "assetLabel": "ETH",
  "disclaimer": "Demonstrative reconstruction, not evidence. The headline facts (the 21 February 2025 theft of about $1.46B from Bybit's Ethereum cold wallet through malicious JavaScript planted in Safe{Wallet}'s infrastructure, the FBI's attribution to TraderTraitor with 51 published addresses, the split across about 50 first-hop wallets, the cmETH recovery and Tether freeze, Bybit's reserve refill and bounty, the 4 March and 21 April accountings by Bybit's CEO, THORChain's record week, eXch's role and the 30 April BKA seizure) come from the cited public record. Amounts are shown in ETH; Bitcoin-side and USD legs are theft-time ETH-equivalents (about $2,800 per ETH). Apart from the exploiter address, Bybit's cold wallet and twelve of the FBI's 51 addresses, wallets are invented, and each of the 24 first-hop nodes stands for about two of the ~50 real wallets. Per-hop splits, exact dates, Bitcoin-side clustering, mixer volumes and the P2P and OTC endpoints are stylised.",
  "sources": [
   {
    "name": "FBI IC3 PSA-2025-02-26: North Korea responsible for $1.5B Bybit hack (TraderTraitor; 51 addresses)",
    "url": "https://www.ic3.gov/psa/2025/psa250226"
   },
   {
    "name": "Sygnia, Feb–Mar 2025: Investigation into the Bybit hack: compromised Safe{Wallet} developer workstation and S3 payload",
    "url": "https://www.sygnia.co/blog/sygnia-investigation-bybit-hack/"
   },
   {
    "name": "Elliptic, Feb–Mar 2025: The largest theft in history: following the money trail from the Bybit hack",
    "url": "https://www.elliptic.co/blog/bybit-hack-largest-in-history"
   },
   {
    "name": "Ben Zhou (Bybit CEO), 4 Mar 2025: executive summary on hacked funds (THORChain / eXch / OKX Web3 proxy breakdown)",
    "url": "https://x.com/benbybit/status/1896798476945744010"
   },
   {
    "name": "Ben Zhou (Bybit CEO), 21 Apr 2025: executive summary: 68.57% traceable, 27.59% dark, 3.84% frozen",
    "url": "https://x.com/benbybit/status/1914155633781469371"
   },
   {
    "name": "The Block, 22 Feb 2025: mETH Protocol announces $43M recovery; Tether freezes $181,000",
    "url": "https://www.theblock.co/post/342840/meth-protocol-announces-43-million-recovery-from-bybit-hack-while-tether-freezes-181000"
   },
   {
    "name": "CoinDesk, 4 Mar 2025: THORChain sees record $4.6B volume after Bybit's $1.4B hack",
    "url": "https://www.coindesk.com/markets/2025/03/04/thorchain-sees-record-usd4-6b-volume-after-bybit-s-usd1-4b-hack"
   },
   {
    "name": "crypto.news, 27 Feb 2025: THORChain core dev resigns after vote to block hacker transactions is reverted",
    "url": "https://crypto.news/thorchain-core-dev-leaves-after-failed-vote-to-block-hacker-transactions/"
   },
   {
    "name": "CNBC, 24 Feb 2025: Bybit says it fully replenished reserves (446,870 ETH) after record $1.5B hack",
    "url": "https://www.cnbc.com/2025/02/24/bybit-replenished-reserves-after-record-breaking-1point5-billion-hack.html"
   },
   {
    "name": "The Record, 9 May 2025: German operation shuts down crypto swap service eXch, seizes ~€34M and 8TB of data",
    "url": "https://therecord.media/exch-cryptocurrency-mixer-germany-takedown"
   }
  ]
 },
 "entities": [
  {
   "id": "bybit",
   "label": "Bybit Cold Wallet",
   "shortAddr": "0x1db9…fcf4",
   "type": "exchange",
   "cluster": "victim",
   "note": "Victim: Bybit's Ethereum cold wallet, a Safe{Wallet} multisig (0x1Db92e2E…). Drained 21 Feb 2025 at ~14:13 UTC after malicious JavaScript served from Safe{Wallet}'s compromised AWS S3 bucket showed the signers a routine transfer while the real payload swapped the Safe's mastercopy via delegatecall (Sygnia). Bybit refilled the 446,870 ETH gap through loans, whale deposits and OTC buys (Galaxy, FalconX, Wintermute, Bitget, MEXC) and republished an audited proof of reserves by 24 Feb."
  },
  {
   "id": "exploiter1",
   "label": "Bybit Exploiter 1",
   "shortAddr": "0x4766…86e2",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "Primary attacker address 0x47666Fab8bd0Ac7003bce3f5C3585383F09486E2: received the 401,347 ETH (~$1.12B) in a single transaction. FBI-attributed to DPRK TraderTraitor (Lazarus) on 26 Feb 2025. About 1,346 ETH still sat here after the dispersal; the residual shown is stylized around that figure."
  },
  {
   "id": "steth_pot",
   "label": "stETH Side Pot",
   "shortAddr": "0x4766…86e2",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "The 90,375.5 stETH leg (~$253.16M), shown separately. Swapped to ETH on DEX aggregators within hours of the theft, before any issuer- or protocol-level intervention was possible."
  },
  {
   "id": "cmeth_pot",
   "label": "cmETH Side Pot",
   "shortAddr": "0x4766…86e2",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "The 15,000 cmETH leg (~$44.13M). cmETH's 8-hour withdrawal delay gave mETH Protocol time to block the exit and claw the tokens back — the single largest recovery from the heist."
  },
  {
   "id": "meth_pot",
   "label": "mETH Side Pot",
   "shortAddr": "0x4766…86e2",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "The 8,000 mETH leg (~$23M). Swapped to ETH on DEXs in the first hours, alongside the stETH."
  },
  {
   "id": "fh01",
   "label": "First-hop Wallet 1",
   "shortAddr": "0x51e9…135d",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh02",
   "label": "First-hop Wallet 2",
   "shortAddr": "0x9624…c3d8",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh03",
   "label": "First-hop Wallet 3",
   "shortAddr": "0x83c7…8950",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh04",
   "label": "First-hop Wallet 4",
   "shortAddr": "0x83ef…a09e",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh05",
   "label": "First-hop Wallet 5",
   "shortAddr": "0xaf62…6ce9",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh06",
   "label": "First-hop Wallet 6",
   "shortAddr": "0x3a21…9847",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh07",
   "label": "First-hop Wallet 7",
   "shortAddr": "0xfa3f…6c49",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh08",
   "label": "First-hop Wallet 8",
   "shortAddr": "0xfc92…6465",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh09",
   "label": "First-hop Wallet 9",
   "shortAddr": "0xb172…03b4",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh10",
   "label": "First-hop Wallet 10",
   "shortAddr": "0x6d46…dc91",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh11",
   "label": "First-hop Wallet 11",
   "shortAddr": "0xf0a1…1c09",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh12",
   "label": "First-hop Wallet 12",
   "shortAddr": "0x23db…c887",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Address is one of the 51 TraderTraitor addresses published in FBI IC3 PSA-2025-02-26. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh13",
   "label": "First-hop Wallet 13",
   "shortAddr": "0x7be1…44aa",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh14",
   "label": "First-hop Wallet 14",
   "shortAddr": "0x2c90…d1e7",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh15",
   "label": "First-hop Wallet 15",
   "shortAddr": "0x91af…0b3c",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh16",
   "label": "First-hop Wallet 16",
   "shortAddr": "0x60d4…9f21",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh17",
   "label": "First-hop Wallet 17",
   "shortAddr": "0xcafe…7702",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh18",
   "label": "First-hop Wallet 18",
   "shortAddr": "0x18b3…5e60",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh19",
   "label": "First-hop Wallet 19",
   "shortAddr": "0x4d77…218b",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh20",
   "label": "First-hop Wallet 20",
   "shortAddr": "0xa053…e9c4",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh21",
   "label": "First-hop Wallet 21",
   "shortAddr": "0x3f6b…70d2",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh22",
   "label": "First-hop Wallet 22",
   "shortAddr": "0xee21…4c55",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh23",
   "label": "First-hop Wallet 23",
   "shortAddr": "0x08c9…b1a6",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "fh24",
   "label": "First-hop Wallet 24",
   "shortAddr": "0x5a30…663f",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Stylized wallet: address invented. Within two hours of the theft the stolen ETH was split across ~50 wallets of ~10,000 ETH each (Elliptic); this node is a stylized composite of roughly two of them. Emptied one by one over the following nine days."
  },
  {
   "id": "cx01",
   "label": "Consolidator 1",
   "shortAddr": "0xb90c…12fe",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Stylized second-hop wallet: address and split invented. Layering wallets like this one collected the first-hop balances and fed the conversion services as the fifty wallets were emptied between 22 Feb and 3 Mar 2025."
  },
  {
   "id": "cx02",
   "label": "Consolidator 2",
   "shortAddr": "0x77e2…a0d9",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Stylized second-hop wallet: address and split invented. Layering wallets like this one collected the first-hop balances and fed the conversion services as the fifty wallets were emptied between 22 Feb and 3 Mar 2025."
  },
  {
   "id": "cx03",
   "label": "Consolidator 3",
   "shortAddr": "0x1fa8…6c07",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Stylized second-hop wallet: address and split invented. Layering wallets like this one collected the first-hop balances and fed the conversion services as the fifty wallets were emptied between 22 Feb and 3 Mar 2025."
  },
  {
   "id": "cx04",
   "label": "Consolidator 4",
   "shortAddr": "0xd24b…83b1",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Stylized second-hop wallet: address and split invented. Layering wallets like this one collected the first-hop balances and fed the conversion services as the fifty wallets were emptied between 22 Feb and 3 Mar 2025."
  },
  {
   "id": "cx05",
   "label": "Consolidator 5",
   "shortAddr": "0x6e0f…f5c2",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Stylized second-hop wallet: address and split invented. Layering wallets like this one collected the first-hop balances and fed the conversion services as the fifty wallets were emptied between 22 Feb and 3 Mar 2025."
  },
  {
   "id": "cx06",
   "label": "Consolidator 6",
   "shortAddr": "0x39d1…07aa",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Stylized second-hop wallet: address and split invented. Layering wallets like this one collected the first-hop balances and fed the conversion services as the fifty wallets were emptied between 22 Feb and 3 Mar 2025."
  },
  {
   "id": "cx07",
   "label": "Consolidator 7",
   "shortAddr": "0xc481…9be3",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Stylized second-hop wallet: address and split invented. Layering wallets like this one collected the first-hop balances and fed the conversion services as the fifty wallets were emptied between 22 Feb and 3 Mar 2025."
  },
  {
   "id": "cx08",
   "label": "Consolidator 8",
   "shortAddr": "0x02a7…d640",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Stylized second-hop wallet: address and split invented. Layering wallets like this one collected the first-hop balances and fed the conversion services as the fifty wallets were emptied between 22 Feb and 3 Mar 2025."
  },
  {
   "id": "thorchain",
   "label": "THORChain",
   "shortAddr": "cross-chain",
   "type": "exchange",
   "cluster": "services",
   "note": "Decentralized cross-chain swap protocol: the main ETH-to-BTC route. 361,255 ETH (72% of the haul) passed through it (Bybit CEO, 4 Mar 2025). The laundering run drove a record ~$4.6B weekly volume and ~$5.5M in fees; a validator vote to halt ETH swaps was reversed within minutes and core developer \"Pluto\" resigned on 27 Feb."
  },
  {
   "id": "exch",
   "label": "eXch",
   "shortAddr": "swap service",
   "type": "mixer",
   "cluster": "services",
   "note": "Anonymous swap service (no KYC, no logs) that refused Bybit's direct requests to block the flows; >$75M of Bybit loot swapped here for BTC in the first days (Elliptic), 79,655 ETH \"gone dark\" via eXch per Bybit's 4 Mar accounting. It earned hundreds of thousands of dollars in fees, announced a 1 May 2025 shutdown — and German police seized its servers on 30 Apr."
  },
  {
   "id": "okx_web3",
   "label": "OKX Web3 Proxy",
   "shortAddr": "dex proxy",
   "type": "exchange",
   "cluster": "services",
   "note": "OKX's Web3 swap proxy: 40,233 ETH (~$100M) routed through it per Bybit's 4 Mar accounting; 16,680 ETH remained traceable, 23,553 ETH (~$65M) went dark."
  },
  {
   "id": "wasabi",
   "label": "Wasabi Wallet",
   "shortAddr": "coinjoin",
   "type": "mixer",
   "cluster": "services",
   "note": "Bitcoin-side coinjoin mixing documented by Elliptic once the converted BTC began moving; volumes through this node are stylized."
  },
  {
   "id": "cryptomixer",
   "label": "CryptoMixer",
   "shortAddr": "mixer",
   "type": "mixer",
   "cluster": "services",
   "note": "Bitcoin mixer that received Bybit-linked BTC (Elliptic); volumes shown are stylized."
  },
  {
   "id": "chainflip",
   "label": "Chainflip Bridge",
   "shortAddr": "cross-chain",
   "type": "exchange",
   "cluster": "chainhop",
   "note": "Cross-chain swap protocol named by Bybit's CEO as one of the ETH-to-BTC routes; Chainflip's team moved to throttle the flows. The volume shown is stylized."
  },
  {
   "id": "okx_out1",
   "label": "Traced OKX Outflow 1",
   "shortAddr": "0x8d2e…4b19",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Stylized wallet standing for the 16,680 ETH of OKX Web3 proxy outflows that tracers could still follow (Bybit, 4 Mar)."
  },
  {
   "id": "okx_out2",
   "label": "Traced OKX Outflow 2",
   "shortAddr": "0x5b77…e30c",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Stylized wallet standing for the traceable remainder of the OKX Web3 proxy outflows."
  },
  {
   "id": "btc01",
   "label": "BTC Cluster 1",
   "shortAddr": "bc1q…3fa2",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Stylized aggregate of post-THORChain bitcoin. By 4 Mar 2025, 417,348 ETH (~$1B) had become ~11,900 BTC spread across 6,954 wallets averaging 1.71 BTC each (Bybit CEO). Amounts shown are theft-time ETH-equivalents; this node stands for ~1,150 of those wallets."
  },
  {
   "id": "btc02",
   "label": "BTC Cluster 2",
   "shortAddr": "bc1q…97cd",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Stylized aggregate of post-THORChain bitcoin. By 4 Mar 2025, 417,348 ETH (~$1B) had become ~11,900 BTC spread across 6,954 wallets averaging 1.71 BTC each (Bybit CEO). Amounts shown are theft-time ETH-equivalents; this node stands for ~1,150 of those wallets."
  },
  {
   "id": "btc03",
   "label": "BTC Cluster 3",
   "shortAddr": "bc1q…e04b",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Stylized aggregate of post-THORChain bitcoin. By 4 Mar 2025, 417,348 ETH (~$1B) had become ~11,900 BTC spread across 6,954 wallets averaging 1.71 BTC each (Bybit CEO). Amounts shown are theft-time ETH-equivalents; this node stands for ~1,150 of those wallets."
  },
  {
   "id": "btc04",
   "label": "BTC Cluster 4",
   "shortAddr": "bc1q…512a",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Stylized aggregate of post-THORChain bitcoin. By 4 Mar 2025, 417,348 ETH (~$1B) had become ~11,900 BTC spread across 6,954 wallets averaging 1.71 BTC each (Bybit CEO). Amounts shown are theft-time ETH-equivalents; this node stands for ~1,150 of those wallets."
  },
  {
   "id": "btc05",
   "label": "BTC Cluster 5",
   "shortAddr": "bc1q…c886",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Stylized aggregate of post-THORChain bitcoin. By 4 Mar 2025, 417,348 ETH (~$1B) had become ~11,900 BTC spread across 6,954 wallets averaging 1.71 BTC each (Bybit CEO). Amounts shown are theft-time ETH-equivalents; this node stands for ~1,150 of those wallets."
  },
  {
   "id": "btc06",
   "label": "BTC Cluster 6",
   "shortAddr": "bc1q…7d19",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Stylized aggregate of post-THORChain bitcoin. By 4 Mar 2025, 417,348 ETH (~$1B) had become ~11,900 BTC spread across 6,954 wallets averaging 1.71 BTC each (Bybit CEO). Amounts shown are theft-time ETH-equivalents; this node stands for ~1,150 of those wallets."
  },
  {
   "id": "btc07",
   "label": "BTC Cluster 7",
   "shortAddr": "bc1q…aa60",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Stylized aggregate of bitcoin bought through eXch, which kept no logs; post-eXch attribution is largely impossible and this cluster is where Bybit's accounting marks the funds \"gone dark\". Theft-time ETH-equivalents."
  },
  {
   "id": "btc08",
   "label": "BTC Cluster 8",
   "shortAddr": "bc1q…b3e4",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Stylized aggregate of bitcoin bought through eXch, which kept no logs; post-eXch attribution is largely impossible and this cluster is where Bybit's accounting marks the funds \"gone dark\". Theft-time ETH-equivalents."
  },
  {
   "id": "p2p_a",
   "label": "P2P Venue Network",
   "shortAddr": "various",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Stylized endpoint. Bybit's 21 Apr 2025 accounting: the untraceable funds primarily flowed into mixers, then through bridges to P2P and OTC platforms. Individual venues are not public."
  },
  {
   "id": "p2p_b",
   "label": "Bridge → P2P (multi-chain)",
   "shortAddr": "various",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Stylized endpoint for the bridged, multi-chain P2P leg described in Bybit's 21 Apr 2025 accounting."
  },
  {
   "id": "otc_desk",
   "label": "OTC Desk Network",
   "shortAddr": "various",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Stylized endpoint for the over-the-counter desks in Bybit's 21 Apr 2025 accounting. Individual desks are not public."
  },
  {
   "id": "cash_net",
   "label": "Cash Conversion",
   "shortAddr": "—",
   "type": "cashout",
   "cluster": "cashout",
   "note": "Stylized final leg: fiat conversion through P2P and OTC channels. DPRK cash-out endpoints for this theft are not public; the flows shown illustrate the stage, not documented transactions."
  },
  {
   "id": "sz_meth",
   "label": "mETH Protocol Recovery",
   "shortAddr": "recovery addr",
   "type": "seizure",
   "cluster": "usg",
   "note": "15,000 cmETH (~$43M) clawed back on 21–22 Feb 2025: cmETH's 8-hour withdrawal delay let mETH Protocol block the exit; recovery initiated by Polygon CISO Mudit Gupta with the SEAL rapid-response team. The largest single recovery from the heist."
  },
  {
   "id": "sz_tether",
   "label": "Tether Freeze",
   "shortAddr": "blacklist",
   "type": "seizure",
   "cluster": "usg",
   "note": "$181,000 of USDT frozen by Tether (announced by CEO Paolo Ardoino, 22–23 Feb 2025). Shown as a 65 ETH theft-time equivalent."
  },
  {
   "id": "sz_partners",
   "label": "Partner Freezes",
   "shortAddr": "various",
   "type": "seizure",
   "cluster": "usg",
   "note": "Early freezes by industry partners — ChangeNOW, FixedFloat, Avalanche, CoinEx, Bitget, Circle and others. Bybit put the first-days frozen total at $42.89M, a figure dominated by the cmETH recovery shown separately; this node stylizes the remainder (~$4.5M equivalent)."
  },
  {
   "id": "sz_bka",
   "label": "BKA / Frankfurt Seizure",
   "shortAddr": "warrant",
   "type": "seizure",
   "cluster": "usg",
   "note": "30 Apr 2025: Germany's BKA and the Frankfurt prosecutor seized eXch's server infrastructure, 8TB of data and crypto worth ~€34M (~$38M in BTC, ETH, LTC, DASH) — the BKA's third-largest crypto confiscation (announced 9 May). The seized pool is the platform's own float, only partly attributable to Bybit; shown as a stylized 13,600 ETH equivalent. TRM later reported eXch's backend API quietly stayed alive."
  },
  {
   "id": "sz_late",
   "label": "Later Freezes",
   "shortAddr": "various",
   "type": "seizure",
   "cluster": "usg",
   "note": "Stylized aggregate of the further freezes that brought the frozen share to 3.84% (~$55M) in Bybit's 21 Apr 2025 accounting; $2.3M in LazarusBounty rewards had been paid to 12 hunters, led by Mantle, ParaSwap and ZachXBT."
  }
 ],
 "edges": [
  {
   "from": "bybit",
   "to": "exploiter1",
   "amountBTC": 401347,
   "date": "2025-02-21",
   "kind": "hack",
   "note": "14:13 UTC: signers approve what the Safe{Wallet} UI shows as a routine transfer; the delegatecall payload swaps the Safe's logic and 401,347 ETH (~$1.12B) leaves in one transaction — the largest crypto theft on record."
  },
  {
   "from": "bybit",
   "to": "steth_pot",
   "amountBTC": 90375.5,
   "date": "2025-02-21",
   "kind": "hack",
   "note": "90,375.5 stETH (~$253.16M) taken in the same operation."
  },
  {
   "from": "bybit",
   "to": "cmeth_pot",
   "amountBTC": 15000,
   "date": "2025-02-21",
   "kind": "hack",
   "note": "15,000 cmETH (~$44.13M) taken in the same operation."
  },
  {
   "from": "bybit",
   "to": "meth_pot",
   "amountBTC": 8000,
   "date": "2025-02-21",
   "kind": "hack",
   "note": "8,000 mETH (~$23M) taken in the same operation."
  },
  {
   "from": "steth_pot",
   "to": "exploiter1",
   "amountBTC": 90375,
   "date": "2025-02-21",
   "kind": "chainhop",
   "note": "stETH swapped to ETH on DEX aggregators within hours, before any freeze was possible (Elliptic)."
  },
  {
   "from": "meth_pot",
   "to": "exploiter1",
   "amountBTC": 8000,
   "date": "2025-02-21",
   "kind": "chainhop",
   "note": "mETH swapped to ETH on DEXs in the first hours."
  },
  {
   "from": "cmeth_pot",
   "to": "sz_meth",
   "amountBTC": 15000,
   "date": "2025-02-22",
   "kind": "seizure",
   "note": "cmETH's 8-hour withdrawal delay lets mETH Protocol block the exit and recover all 15,000 cmETH (~$43M) — Mudit Gupta (Polygon) with the SEAL team."
  },
  {
   "from": "exploiter1",
   "to": "sz_tether",
   "amountBTC": 65,
   "date": "2025-02-23",
   "kind": "seizure",
   "note": "$181,000 of USDT frozen by Tether (shown as a stylized 65 ETH theft-time equivalent)."
  },
  {
   "from": "exploiter1",
   "to": "fh01",
   "amountBTC": 22500,
   "date": "2025-02-21",
   "kind": "peel",
   "note": "Split across ~50 first-hop wallets within two hours of the theft (Elliptic); splits stylized."
  },
  {
   "from": "exploiter1",
   "to": "fh02",
   "amountBTC": 21300,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh03",
   "amountBTC": 20200,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh04",
   "amountBTC": 23000,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh05",
   "amountBTC": 21000,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh06",
   "amountBTC": 20000,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh07",
   "amountBTC": 22200,
   "date": "2025-02-21",
   "kind": "peel",
   "note": "Split across ~50 first-hop wallets within two hours of the theft (Elliptic); splits stylized."
  },
  {
   "from": "exploiter1",
   "to": "fh08",
   "amountBTC": 21600,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh09",
   "amountBTC": 20200,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh10",
   "amountBTC": 23400,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh11",
   "amountBTC": 20800,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh12",
   "amountBTC": 19800,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh13",
   "amountBTC": 22700,
   "date": "2025-02-21",
   "kind": "peel",
   "note": "Split across ~50 first-hop wallets within two hours of the theft (Elliptic); splits stylized."
  },
  {
   "from": "exploiter1",
   "to": "fh14",
   "amountBTC": 21500,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh15",
   "amountBTC": 19800,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh16",
   "amountBTC": 18700,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh17",
   "amountBTC": 18000,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh18",
   "amountBTC": 17355,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh19",
   "amountBTC": 21200,
   "date": "2025-02-21",
   "kind": "peel",
   "note": "Split across ~50 first-hop wallets within two hours of the theft (Elliptic); splits stylized."
  },
  {
   "from": "exploiter1",
   "to": "fh20",
   "amountBTC": 20400,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh21",
   "amountBTC": 19700,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh22",
   "amountBTC": 20700,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh23",
   "amountBTC": 20200,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exploiter1",
   "to": "fh24",
   "amountBTC": 19800,
   "date": "2025-02-21",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh01",
   "to": "cx01",
   "amountBTC": 22500,
   "date": "2025-02-22",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh02",
   "to": "cx01",
   "amountBTC": 21300,
   "date": "2025-03-01",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh03",
   "to": "cx01",
   "amountBTC": 20200,
   "date": "2025-02-26",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh04",
   "to": "cx02",
   "amountBTC": 23000,
   "date": "2025-02-23",
   "kind": "peel",
   "note": "First-hop wallets were emptied one by one over nine days; the last on 3 Mar 2025 (Elliptic)."
  },
  {
   "from": "fh05",
   "to": "cx02",
   "amountBTC": 21000,
   "date": "2025-03-02",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh06",
   "to": "cx02",
   "amountBTC": 20000,
   "date": "2025-02-27",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh07",
   "to": "cx03",
   "amountBTC": 22200,
   "date": "2025-02-24",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh08",
   "to": "cx03",
   "amountBTC": 21600,
   "date": "2025-03-03",
   "kind": "peel",
   "note": "First-hop wallets were emptied one by one over nine days; the last on 3 Mar 2025 (Elliptic)."
  },
  {
   "from": "fh09",
   "to": "cx03",
   "amountBTC": 20200,
   "date": "2025-02-28",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh10",
   "to": "cx04",
   "amountBTC": 23400,
   "date": "2025-02-25",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh11",
   "to": "cx04",
   "amountBTC": 20800,
   "date": "2025-02-22",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh12",
   "to": "cx04",
   "amountBTC": 19800,
   "date": "2025-03-01",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh13",
   "to": "cx05",
   "amountBTC": 22700,
   "date": "2025-02-26",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh14",
   "to": "cx05",
   "amountBTC": 21500,
   "date": "2025-02-23",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh15",
   "to": "cx05",
   "amountBTC": 19800,
   "date": "2025-03-02",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh16",
   "to": "cx06",
   "amountBTC": 18700,
   "date": "2025-02-27",
   "kind": "peel",
   "note": "First-hop wallets were emptied one by one over nine days; the last on 3 Mar 2025 (Elliptic)."
  },
  {
   "from": "fh17",
   "to": "cx06",
   "amountBTC": 18000,
   "date": "2025-02-24",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh18",
   "to": "cx06",
   "amountBTC": 17355,
   "date": "2025-03-03",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh19",
   "to": "cx07",
   "amountBTC": 21200,
   "date": "2025-02-28",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh20",
   "to": "cx07",
   "amountBTC": 20400,
   "date": "2025-02-25",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh21",
   "to": "cx07",
   "amountBTC": 19700,
   "date": "2025-02-22",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh22",
   "to": "cx08",
   "amountBTC": 20700,
   "date": "2025-03-01",
   "kind": "peel",
   "note": "First-hop wallets were emptied one by one over nine days; the last on 3 Mar 2025 (Elliptic)."
  },
  {
   "from": "fh23",
   "to": "cx08",
   "amountBTC": 20200,
   "date": "2025-02-26",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "fh24",
   "to": "cx08",
   "amountBTC": 19800,
   "date": "2025-02-23",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "cx01",
   "to": "thorchain",
   "amountBTC": 22500,
   "date": "2025-02-23",
   "kind": "chainhop",
   "note": "361,255 ETH (72%) swapped ETH→BTC through THORChain (Bybit CEO, 4 Mar 2025); record ~$4.6B weekly volume, ~$5.5M in fees. Tranche sizes stylized; amounts gross of fees."
  },
  {
   "from": "cx01",
   "to": "thorchain",
   "amountBTC": 21300,
   "date": "2025-03-02",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx01",
   "to": "thorchain",
   "amountBTC": 20200,
   "date": "2025-02-27",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx02",
   "to": "thorchain",
   "amountBTC": 23000,
   "date": "2025-02-24",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx02",
   "to": "thorchain",
   "amountBTC": 21000,
   "date": "2025-03-03",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx02",
   "to": "thorchain",
   "amountBTC": 20000,
   "date": "2025-02-28",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx03",
   "to": "thorchain",
   "amountBTC": 22200,
   "date": "2025-02-25",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx03",
   "to": "thorchain",
   "amountBTC": 21600,
   "date": "2025-03-04",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx03",
   "to": "thorchain",
   "amountBTC": 20200,
   "date": "2025-03-01",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx04",
   "to": "thorchain",
   "amountBTC": 23400,
   "date": "2025-02-26",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx04",
   "to": "thorchain",
   "amountBTC": 20800,
   "date": "2025-02-23",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx04",
   "to": "thorchain",
   "amountBTC": 19800,
   "date": "2025-03-02",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx05",
   "to": "thorchain",
   "amountBTC": 22700,
   "date": "2025-02-27",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx05",
   "to": "thorchain",
   "amountBTC": 21500,
   "date": "2025-02-24",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx05",
   "to": "thorchain",
   "amountBTC": 19800,
   "date": "2025-03-03",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx06",
   "to": "thorchain",
   "amountBTC": 17200,
   "date": "2025-02-28",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx06",
   "to": "thorchain",
   "amountBTC": 6500,
   "date": "2025-02-25",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx06",
   "to": "thorchain",
   "amountBTC": 17555,
   "date": "2025-03-04",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "cx06",
   "to": "chainflip",
   "amountBTC": 11500,
   "date": "2025-02-26",
   "kind": "chainhop",
   "note": "Bybit's CEO named Chainflip among the ETH→BTC bridge routes; volume stylized. Chainflip moved to throttle the flows."
  },
  {
   "from": "cx06",
   "to": "sz_partners",
   "amountBTC": 800,
   "date": "2025-03-05",
   "kind": "seizure",
   "note": "Stylized: early partner freezes (ChangeNOW, FixedFloat, Avalanche, CoinEx, Bitget, Circle et al.)."
  },
  {
   "from": "cx07",
   "to": "exch",
   "amountBTC": 19400,
   "date": "2025-02-23",
   "kind": "deposit",
   "note": ">$75M of Bybit loot swapped for BTC at eXch, which refused Bybit's requests to block it (Elliptic); 79,655 ETH \"gone dark\" via eXch per Bybit's 4 Mar accounting."
  },
  {
   "from": "cx07",
   "to": "sz_partners",
   "amountBTC": 800,
   "date": "2025-02-26",
   "kind": "seizure",
   "note": "Stylized: early partner freezes within Bybit's $42.89M first-days figure."
  },
  {
   "from": "cx07",
   "to": "exch",
   "amountBTC": 19900,
   "date": "2025-02-27",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "cx07",
   "to": "exch",
   "amountBTC": 20600,
   "date": "2025-03-01",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "cx08",
   "to": "exch",
   "amountBTC": 19755,
   "date": "2025-02-24",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "cx08",
   "to": "okx_web3",
   "amountBTC": 20000,
   "date": "2025-03-02",
   "kind": "deposit",
   "note": "40,233 ETH (~$100M) through the OKX Web3 proxy (Bybit CEO, 4 Mar 2025)."
  },
  {
   "from": "cx08",
   "to": "okx_web3",
   "amountBTC": 20233,
   "date": "2025-02-28",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc01",
   "amountBTC": 22500,
   "date": "2025-02-24",
   "kind": "chainhop",
   "note": "BTC leg shown as theft-time ETH-equivalent. By 4 Mar, ~11,900 BTC sat across 6,954 wallets averaging 1.71 BTC each (Bybit CEO); clustering stylized."
  },
  {
   "from": "thorchain",
   "to": "btc02",
   "amountBTC": 21300,
   "date": "2025-03-03",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc03",
   "amountBTC": 20200,
   "date": "2025-02-28",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc04",
   "amountBTC": 23000,
   "date": "2025-02-25",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc05",
   "amountBTC": 21000,
   "date": "2025-03-04",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc06",
   "amountBTC": 20000,
   "date": "2025-03-01",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc01",
   "amountBTC": 22200,
   "date": "2025-02-26",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc02",
   "amountBTC": 21600,
   "date": "2025-03-05",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc03",
   "amountBTC": 20200,
   "date": "2025-03-02",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc04",
   "amountBTC": 23400,
   "date": "2025-02-27",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc05",
   "amountBTC": 20800,
   "date": "2025-02-24",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc06",
   "amountBTC": 19800,
   "date": "2025-03-03",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc01",
   "amountBTC": 22700,
   "date": "2025-02-28",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc02",
   "amountBTC": 21500,
   "date": "2025-02-25",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc03",
   "amountBTC": 19800,
   "date": "2025-03-04",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc04",
   "amountBTC": 17200,
   "date": "2025-03-01",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc05",
   "amountBTC": 6500,
   "date": "2025-02-26",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "thorchain",
   "to": "btc06",
   "amountBTC": 17555,
   "date": "2025-03-05",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "chainflip",
   "to": "btc06",
   "amountBTC": 11500,
   "date": "2025-03-01",
   "kind": "chainhop",
   "note": "Bridged leg; ETH-equivalent, stylized."
  },
  {
   "from": "exch",
   "to": "btc07",
   "amountBTC": 16000,
   "date": "2025-03-02",
   "kind": "chainhop",
   "note": "Post-eXch attribution is largely impossible (no logs); this is where Bybit's accounting marks funds \"gone dark\". ETH-equivalents, stylized."
  },
  {
   "from": "exch",
   "to": "btc07",
   "amountBTC": 17100,
   "date": "2025-03-06",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "exch",
   "to": "btc08",
   "amountBTC": 16955,
   "date": "2025-03-05",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "exch",
   "to": "btc08",
   "amountBTC": 16000,
   "date": "2025-03-07",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "exch",
   "to": "sz_bka",
   "amountBTC": 13600,
   "date": "2025-04-30",
   "kind": "seizure",
   "note": "BKA/Frankfurt seizure of eXch's servers, 8TB of data and ~€34M (~$38M) in crypto, announced 9 May 2025. The seized pool is the platform's float, only partly Bybit-attributable; stylized ETH-equivalent."
  },
  {
   "from": "okx_web3",
   "to": "okx_out1",
   "amountBTC": 8500,
   "date": "2025-03-06",
   "kind": "chainhop",
   "note": "16,680 ETH of the OKX Web3 proxy outflows stayed traceable; 23,553 ETH (~$65M) went dark (Bybit CEO, 4 Mar 2025)."
  },
  {
   "from": "okx_web3",
   "to": "okx_out2",
   "amountBTC": 8180,
   "date": "2025-03-08",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "btc01",
   "to": "wasabi",
   "amountBTC": 8000,
   "date": "2025-03-08",
   "kind": "deposit",
   "note": "Bitcoin-side mixing begins: Wasabi coinjoins documented by Elliptic; volumes stylized."
  },
  {
   "from": "btc02",
   "to": "wasabi",
   "amountBTC": 6000,
   "date": "2025-03-15",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc03",
   "to": "wasabi",
   "amountBTC": 5000,
   "date": "2025-03-25",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc04",
   "to": "wasabi",
   "amountBTC": 3000,
   "date": "2025-04-05",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc05",
   "to": "cryptomixer",
   "amountBTC": 3500,
   "date": "2025-03-12",
   "kind": "deposit",
   "note": "CryptoMixer receipts documented by Elliptic; volume stylized."
  },
  {
   "from": "btc06",
   "to": "cryptomixer",
   "amountBTC": 3000,
   "date": "2025-03-20",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc01",
   "to": "otc_desk",
   "amountBTC": 18000,
   "date": "2025-03-18",
   "kind": "deposit",
   "note": "Untraceable funds primarily flowed into mixers, then through bridges to P2P and OTC platforms (Bybit CEO, 21 Apr 2025). Endpoints stylized."
  },
  {
   "from": "btc02",
   "to": "p2p_a",
   "amountBTC": 15000,
   "date": "2025-03-22",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc03",
   "to": "otc_desk",
   "amountBTC": 16000,
   "date": "2025-04-01",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc04",
   "to": "p2p_b",
   "amountBTC": 14000,
   "date": "2025-04-08",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc05",
   "to": "p2p_a",
   "amountBTC": 13000,
   "date": "2025-04-12",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc06",
   "to": "otc_desk",
   "amountBTC": 14000,
   "date": "2025-04-16",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc02",
   "to": "sz_late",
   "amountBTC": 2500,
   "date": "2025-04-21",
   "kind": "seizure",
   "note": "Stylized: the further freezes bringing the frozen share to 3.84% (~$55M) in Bybit's 21 Apr 2025 accounting."
  },
  {
   "from": "wasabi",
   "to": "p2p_a",
   "amountBTC": 8000,
   "date": "2025-03-14",
   "kind": "deposit",
   "note": "Post-mix attribution is investigators' clustering; stylized."
  },
  {
   "from": "wasabi",
   "to": "otc_desk",
   "amountBTC": 7500,
   "date": "2025-03-28",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "wasabi",
   "to": "p2p_b",
   "amountBTC": 3400,
   "date": "2025-04-10",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "cryptomixer",
   "to": "p2p_b",
   "amountBTC": 6300,
   "date": "2025-04-02",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "btc07",
   "to": "p2p_b",
   "amountBTC": 10500,
   "date": "2025-03-15",
   "kind": "deposit",
   "note": "Post-eXch leg; stylized."
  },
  {
   "from": "btc08",
   "to": "p2p_b",
   "amountBTC": 9500,
   "date": "2025-03-25",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "otc_desk",
   "to": "cash_net",
   "amountBTC": 20000,
   "date": "2025-04-06",
   "kind": "cashout",
   "note": "Fiat conversion through OTC desks; DPRK cash-out endpoints are not public — flows stylized."
  },
  {
   "from": "p2p_a",
   "to": "cash_net",
   "amountBTC": 12000,
   "date": "2025-04-18",
   "kind": "cashout",
   "note": ""
  },
  {
   "from": "p2p_b",
   "to": "cash_net",
   "amountBTC": 13000,
   "date": "2025-04-25",
   "kind": "cashout",
   "note": ""
  },
  {
   "from": "otc_desk",
   "to": "cash_net",
   "amountBTC": 8000,
   "date": "2025-05-05",
   "kind": "cashout",
   "note": ""
  }
 ],
 "chapters": [
  {
   "id": "ch1",
   "title": "Nineteen Days in the Supply Chain",
   "tStart": "2025-02-04",
   "tEnd": "2025-02-21",
   "caption": "On 4 February 2025 a Safe{Wallet} developer's workstation was compromised. The attackers used his AWS token to reach Safe's infrastructure and on 19 February planted malicious JavaScript in its S3 bucket. On 21 February at about 14:13 UTC, Bybit's signers approved what their screens showed as a routine transfer. The payload replaced the wallet's contract logic and about $1.46B left: 401,347 ETH plus stETH, cmETH and mETH. Elliptic calls it the largest crypto theft on record.",
   "focus": [
    "bybit",
    "exploiter1",
    "steth_pot",
    "cmeth_pot",
    "meth_pot"
   ]
  },
  {
   "id": "ch2",
   "title": "Fifty Wallets in Two Hours",
   "tStart": "2025-02-21",
   "tEnd": "2025-02-23",
   "caption": "Within hours the stETH and mETH were swapped to ETH on decentralized exchanges. Within two hours the ETH was split across about 50 first-hop wallets of roughly 10,000 ETH each (Elliptic). The FBI later published 51 addresses linked to the theft (IC3 PSA-2025-02-26).",
   "focus": [
    "exploiter1",
    "fh01",
    "fh07",
    "fh13",
    "fh19"
   ]
  },
  {
   "id": "ch3",
   "title": "The First Freezes",
   "tStart": "2025-02-21",
   "tEnd": "2025-02-26",
   "caption": "cmETH's 8-hour withdrawal delay let mETH Protocol recover all 15,000 cmETH (about $43M), and Tether froze $181,000. Bybit's first-days tally of $42.89M frozen with partners overlaps that cmETH recovery in public reporting. Bybit replaced the 446,870 ETH through loans and OTC purchases by 24 February and launched a 10% recovery bounty (up to $140M) on 25 February. On 26 February the FBI attributed the theft to North Korea's TraderTraitor.",
   "focus": [
    "cmeth_pot",
    "sz_meth",
    "sz_tether",
    "sz_partners",
    "bybit"
   ]
  },
  {
   "id": "ch4",
   "title": "The THORChain Run",
   "tStart": "2025-02-22",
   "tEnd": "2025-03-04",
   "caption": "The first-hop wallets were emptied one by one over nine days, mostly into THORChain: 361,255 ETH, 72% of the haul, was swapped to bitcoin there. THORChain logged a record ~$4.6B week and ~$5.5M in fees. A validator vote to halt ETH swaps was reversed within minutes, and core developer \"Pluto\" resigned. By 4 March, 417,348 ETH had been converted to BTC across 6,954 wallets.",
   "focus": [
    "cx01",
    "cx04",
    "thorchain",
    "btc01",
    "btc04",
    "chainflip"
   ]
  },
  {
   "id": "ch5",
   "title": "The Exchange That Would Not Say No",
   "tStart": "2025-02-22",
   "tEnd": "2025-03-08",
   "caption": "eXch, a swap service with no identity checks, converted more than $75M of the loot to BTC despite Bybit's direct requests to block it, earning hundreds of thousands in fees (Elliptic). Bybit's 4 March accounting: 79,655 ETH went dark through eXch, and 40,233 ETH went through an OKX Web3 proxy, of which 23,553 ETH is untraceable.",
   "focus": [
    "exch",
    "okx_web3",
    "btc07",
    "okx_out1"
   ]
  },
  {
   "id": "ch6",
   "title": "Six Thousand Nine Hundred Wallets",
   "tStart": "2025-03-05",
   "tEnd": "2025-04-21",
   "caption": "In the bitcoin phase, funds went through Wasabi coinjoins and CryptoMixer, across bridges to other chains, and on to peer-to-peer venues and OTC desks (Bybit, 21 April). Bybit's 21 April accounting: 68.57% still traceable, 27.59% gone dark, 3.84% frozen, and $2.3M paid across 12 bounty claims.",
   "focus": [
    "btc01",
    "wasabi",
    "cryptomixer",
    "p2p_a",
    "otc_desk",
    "cash_net"
   ]
  },
  {
   "id": "ch7",
   "title": "Takedown in Frankfurt",
   "tStart": "2025-04-21",
   "tEnd": "2025-05-09",
   "caption": "eXch announced it would shut down on 1 May. On 30 April Germany's BKA and the Frankfurt prosecutor seized its server infrastructure, 8TB of data and about €34M (~$38M) in BTC, ETH, LTC and DASH, the BKA's third-largest crypto confiscation (announced 9 May). TRM later reported that eXch's backend API stayed online.",
   "focus": [
    "exch",
    "sz_bka",
    "sz_late"
   ]
  }
 ]
};
