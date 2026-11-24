window.CASE_DATA_002 = {
 "meta": {
  "title": "Laundering trail of the March 2022 Ronin Bridge hack (Axie Infinity)",
  "caseNo": "002",
  "assetLabel": "ETH",
  "disclaimer": "Demonstrative reconstruction, not evidence. The headline facts (the 23 March 2022 drain of 173,600 ETH and 25.5M USDC through five of nine validator keys, the OFAC sanction and FBI attribution to Lazarus Group on 14 April 2022, the USDC swap into 8,562.68 ETH, about $16.7M sent through centralized exchanges, Binance's freeze of about $5.8M across 86 accounts, 175,100 ETH through Tornado Cash, the renBTC chain-hop, about $20.5M through Blender.io, 3,460.68 BTC into ChipMixer, the ~$30M US seizure and Norway's NOK 60M seizure) come from the cited public record. Amounts are shown in ETH; the USDC and Bitcoin-side legs are rounded ETH-equivalents, noted on each edge. Apart from the attacker address and a few publicly documented depositor and exchange addresses, intermediary wallets are invented. Hop counts, per-hop splits, dates inside the documented windows, post-Tornado attribution and the cash-out endpoints are stylised.",
  "sources": [
   {
    "name": "Elliptic, 14 Apr 2022: North Korea's Lazarus Group identified as exploiters behind the Ronin bridge heist",
    "url": "https://www.elliptic.co/blog/540-million-stolen-from-the-ronin-defi-bridge"
   },
   {
    "name": "Chainalysis, 8 Sep 2022: ~$30M seized: how the crypto community made profiting hard for North Korean hackers",
    "url": "https://www.chainalysis.com/blog/axie-infinity-ronin-bridge-dprk-hack-seizure/"
   },
   {
    "name": "SlowMist, 2022: Report on the Ronin Network exploit and AML analysis of stolen funds",
    "url": "https://slowmist.medium.com/report-on-the-ronin-network-exploit-and-aml-analysis-of-stolen-funds-692b2a589a96"
   },
   {
    "name": "The Record, 6 May 2022: US Treasury sanctions cryptocurrency mixer Blender.io, citing the Ronin hack",
    "url": "https://therecord.media/cryptocurrency-mixer-sanctions-ofac-blendrio-lazarus-group"
   },
   {
    "name": "CryptoSlate, Aug 2022: Ronin bridge hackers used ChipMixer to launder over $73M (SlowMist/₿liteZero)",
    "url": "https://cryptoslate.com/ronin-bridge-hackers-used-chipmixer-to-launder-over-73m-of-stolen-funds/"
   },
   {
    "name": "Decrypt, 16 Feb 2023: Norwegian authorities recoup $5.9M from Axie Infinity Ronin hack",
    "url": "https://decrypt.co/121501/norwegian-authorities-recoup-5-9m-axie-infinity-ronin-hack"
   },
   {
    "name": "tayvano/lazarus-bluenoroff-research: Ronin bridge open-source tracing notes (depositor addresses, tranches)",
    "url": "https://github.com/tayvano/lazarus-bluenoroff-research/blob/main/hacks-and-thefts/ronin_bridge.md"
   }
  ]
 },
 "entities": [
  {
   "id": "ronin",
   "label": "Ronin Bridge",
   "shortAddr": "0x8407…dc5f",
   "type": "exchange",
   "cluster": "victim",
   "note": "Victim: the Ronin Network bridge (Axie Infinity sidechain, Sky Mavis). Drained 23 Mar 2022 in two transactions after 5 of 9 validator keys were compromised; discovered only six days later when a user's withdrawal failed."
  },
  {
   "id": "lazarus",
   "label": "Lazarus Wallet",
   "shortAddr": "0x098b…2f96",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "Primary attacker address 0x098B716B8Aaf21512996dC57EB0615e2383E2f96. Sanctioned by OFAC on 14 Apr 2022 with FBI attribution to the DPRK's Lazarus Group (APT38)."
  },
  {
   "id": "usdc25m",
   "label": "USDC Tranche (25.5M)",
   "shortAddr": "0x098b…2f96",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "The 25.5M USDC leg of the theft, shown separately. Because Circle can freeze USDC, it was swapped almost immediately for 8,562.68 ETH on DEXs (1inch, Uniswap) per SlowMist."
  },
  {
   "id": "exf_a",
   "label": "Feeder Wallet A",
   "shortAddr": "0xb07d…e111",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "First-hop wallet feeding centralized-exchange deposit addresses. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "exf_b",
   "label": "Feeder Wallet B",
   "shortAddr": "0xe48c…8c5a",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "First-hop wallet feeding Huobi deposit addresses (six were identified). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "exf_c",
   "label": "Feeder Wallet C",
   "shortAddr": "0x98e3…b6ea",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "First-hop wallet feeding FTX and Crypto.com deposit addresses. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "binance",
   "label": "Binance",
   "shortAddr": "deposit addrs",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Exchange deposits attempted in the first weeks. Binance froze and recovered ~$5.8M spread across 86 accounts (announced 22 Apr 2022)."
  },
  {
   "id": "huobi",
   "label": "Huobi",
   "shortAddr": "6 deposit addrs",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Six Huobi deposit addresses were identified receiving Ronin funds; a portion was later withdrawn as BTC (SlowMist: 439.78 BTC withdrawn from Huobi and FTX combined)."
  },
  {
   "id": "ftx",
   "label": "FTX",
   "shortAddr": "0x0365…54f9",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Identified FTX deposit address 0x036587e7… received Ronin funds; part later withdrawn as BTC."
  },
  {
   "id": "cryptocom",
   "label": "Crypto.com",
   "shortAddr": "0x8290…99dd",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Identified Crypto.com deposit address 0x82906886… received a smaller portion."
  },
  {
   "id": "td_a01",
   "label": "TC Depositor A-01",
   "shortAddr": "0xbc25…4956",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Documented depositor 0xbc25d574…: 2,000 ETH into Tornado Cash on 4 Apr 2022, the largest single depositor of the first wave (lazarus-bluenoroff-research)."
  },
  {
   "id": "td_a02",
   "label": "TC Depositor A-02",
   "shortAddr": "0x76a2…e87b",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a03",
   "label": "TC Depositor A-03",
   "shortAddr": "0x74a3…f3d5",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a04",
   "label": "TC Depositor A-04",
   "shortAddr": "0x8aa6…23c3",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a05",
   "label": "TC Depositor A-05",
   "shortAddr": "0x637a…0832",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a06",
   "label": "TC Depositor A-06",
   "shortAddr": "0x4f6f…03ea",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a07",
   "label": "TC Depositor A-07",
   "shortAddr": "0x8e56…9674",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a08",
   "label": "TC Depositor A-08",
   "shortAddr": "0xbc87…a64b",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a09",
   "label": "TC Depositor A-09",
   "shortAddr": "0xcbd9…f326",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a10",
   "label": "TC Depositor A-10",
   "shortAddr": "0xca67…0755",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a11",
   "label": "TC Depositor A-11",
   "shortAddr": "0x1ade…8dee",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a12",
   "label": "TC Depositor A-12",
   "shortAddr": "0x4686…3b7d",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a13",
   "label": "TC Depositor A-13",
   "shortAddr": "0x74da…87e4",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_a14",
   "label": "TC Depositor A-14",
   "shortAddr": "0x7d9f…a502",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, first wave: fed the 100 ETH pool in repeated 100 ETH increments (1,750 such deposits were counted in total). Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b01",
   "label": "TC Depositor B-01",
   "shortAddr": "0x002c…6d64",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Documented depositor 0x002c9345…: 8,700 ETH tranche on 3 May 2022 (lazarus-bluenoroff-research)."
  },
  {
   "id": "td_b02",
   "label": "TC Depositor B-02",
   "shortAddr": "0x9e1e…c07a",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Documented depositor 0x9e1e4198…: 8,500 ETH tranche on 29 Apr 2022 (lazarus-bluenoroff-research)."
  },
  {
   "id": "td_b03",
   "label": "TC Depositor B-03",
   "shortAddr": "0xcccb…711a",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b04",
   "label": "TC Depositor B-04",
   "shortAddr": "0xa904…f660",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b05",
   "label": "TC Depositor B-05",
   "shortAddr": "0x28f8…65a4",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b06",
   "label": "TC Depositor B-06",
   "shortAddr": "0xd6cc…2cf2",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b07",
   "label": "TC Depositor B-07",
   "shortAddr": "0xb762…9608",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b08",
   "label": "TC Depositor B-08",
   "shortAddr": "0xff3a…36b2",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b09",
   "label": "TC Depositor B-09",
   "shortAddr": "0xefe0…bcc9",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b10",
   "label": "TC Depositor B-10",
   "shortAddr": "0xe4d1…99d6",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b11",
   "label": "TC Depositor B-11",
   "shortAddr": "0x53e0…5c7e",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b12",
   "label": "TC Depositor B-12",
   "shortAddr": "0x5cd1…d7c8",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b13",
   "label": "TC Depositor B-13",
   "shortAddr": "0xe14c…7d26",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b14",
   "label": "TC Depositor B-14",
   "shortAddr": "0x1214…8c3a",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b15",
   "label": "TC Depositor B-15",
   "shortAddr": "0xd89f…786b",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b16",
   "label": "TC Depositor B-16",
   "shortAddr": "0xafc7…f192",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b17",
   "label": "TC Depositor B-17",
   "shortAddr": "0x5d14…16fd",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "td_b18",
   "label": "TC Depositor B-18",
   "shortAddr": "0xbb95…698f",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Tornado Cash depositor wallet, second wave: single tranches of 3,000-8,700 ETH after the 16-21 Apr pause. Stylized wallet: address, split and exact date invented within the documented window."
  },
  {
   "id": "tornado",
   "label": "Tornado Cash",
   "shortAddr": "100 ETH pool",
   "type": "mixer",
   "cluster": "services",
   "note": "Ethereum smart-contract mixer. SlowMist counted 175,100 ETH of Ronin funds deposited by 20 Jul 2022. OFAC sanctioned Tornado Cash itself on 8 Aug 2022, citing $455M laundered for Lazarus Group."
  },
  {
   "id": "tw1",
   "label": "Fresh Wallet 1",
   "shortAddr": "0xfcae…0a9a",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Post-mix wallet. Tornado Cash severs the on-chain link; which withdrawals were Lazarus's is investigators' clustering, and this wallet's address, amount and dates are stylized."
  },
  {
   "id": "tw2",
   "label": "Fresh Wallet 2",
   "shortAddr": "0xe9b9…1d1d",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Post-mix wallet. Tornado Cash severs the on-chain link; which withdrawals were Lazarus's is investigators' clustering, and this wallet's address, amount and dates are stylized."
  },
  {
   "id": "tw3",
   "label": "Fresh Wallet 3",
   "shortAddr": "0x86c3…202d",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Post-mix wallet. Tornado Cash severs the on-chain link; which withdrawals were Lazarus's is investigators' clustering, and this wallet's address, amount and dates are stylized."
  },
  {
   "id": "tw4",
   "label": "Fresh Wallet 4",
   "shortAddr": "0xf6eb…6327",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Post-mix wallet. Tornado Cash severs the on-chain link; which withdrawals were Lazarus's is investigators' clustering, and this wallet's address, amount and dates are stylized."
  },
  {
   "id": "tw5",
   "label": "Fresh Wallet 5",
   "shortAddr": "0x26b8…92c3",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Post-mix wallet. Tornado Cash severs the on-chain link; which withdrawals were Lazarus's is investigators' clustering, and this wallet's address, amount and dates are stylized."
  },
  {
   "id": "tw6",
   "label": "Fresh Wallet 6",
   "shortAddr": "0xb19f…f77e",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Post-mix wallet. Tornado Cash severs the on-chain link; which withdrawals were Lazarus's is investigators' clustering, and this wallet's address, amount and dates are stylized."
  },
  {
   "id": "tw7",
   "label": "Fresh Wallet 7",
   "shortAddr": "0xea9f…04d9",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Post-mix wallet. Tornado Cash severs the on-chain link; which withdrawals were Lazarus's is investigators' clustering, and this wallet's address, amount and dates are stylized."
  },
  {
   "id": "tw8",
   "label": "Fresh Wallet 8",
   "shortAddr": "0x52b3…e97a",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Post-mix wallet. Tornado Cash severs the on-chain link; which withdrawals were Lazarus's is investigators' clustering, and this wallet's address, amount and dates are stylized."
  },
  {
   "id": "renbridge",
   "label": "Ren Bridge (renBTC)",
   "shortAddr": "renBTC gateway",
   "type": "intermediary",
   "cluster": "chainhop",
   "note": "Cross-chain bridge. Post-mix ETH was swapped to renBTC via 1inch/Uniswap and bridged to the Bitcoin network (SlowMist; intermediary TC-to-Ren addresses documented in lazarus-bluenoroff-research)."
  },
  {
   "id": "bw1",
   "label": "BTC Wallet 1",
   "shortAddr": "bc1q…295a",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Bitcoin-side wallet. Amount shown in ETH-equivalent units of the stolen funds; the underlying asset here is BTC. Address and split stylized."
  },
  {
   "id": "bw2",
   "label": "BTC Wallet 2",
   "shortAddr": "bc1q…0418",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Bitcoin-side wallet. Amount shown in ETH-equivalent units of the stolen funds; the underlying asset here is BTC. Address and split stylized."
  },
  {
   "id": "bw3",
   "label": "BTC Wallet 3",
   "shortAddr": "bc1q…388e",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Bitcoin-side wallet. Amount shown in ETH-equivalent units of the stolen funds; the underlying asset here is BTC. Address and split stylized."
  },
  {
   "id": "bw4",
   "label": "BTC Wallet 4",
   "shortAddr": "bc1q…f998",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Bitcoin-side wallet. Amount shown in ETH-equivalent units of the stolen funds; the underlying asset here is BTC. Address and split stylized."
  },
  {
   "id": "bw5",
   "label": "BTC Wallet 5",
   "shortAddr": "bc1q…1b84",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Bitcoin-side wallet. Amount shown in ETH-equivalent units of the stolen funds; the underlying asset here is BTC. Address and split stylized."
  },
  {
   "id": "blender",
   "label": "Blender.io",
   "shortAddr": "blender.io",
   "type": "mixer",
   "cluster": "post_mixer",
   "note": "Custodial Bitcoin mixer. Processed ~$20.5M of Ronin proceeds; OFAC sanctioned it on 6 May 2022 — the first-ever sanction of a virtual-currency mixer."
  },
  {
   "id": "chip",
   "label": "ChipMixer",
   "shortAddr": "chips",
   "type": "mixer",
   "cluster": "post_mixer",
   "note": "Bitcoin mixer. SlowMist traced 3,460.68 BTC (~$73.2M) of Ronin funds into ChipMixer, of which 2,871.03 BTC had been withdrawn by 22 Aug 2022. Seized by international law enforcement in Mar 2023."
  },
  {
   "id": "pcw1",
   "label": "Post-Chip Wallet 1",
   "shortAddr": "bc1q…33ac",
   "type": "intermediary",
   "cluster": "cashout",
   "note": "Post-ChipMixer consolidation wallet (2,871.03 BTC withdrawn in total per SlowMist). Address and split stylized."
  },
  {
   "id": "pcw2",
   "label": "Post-Chip Wallet 2",
   "shortAddr": "bc1q…2e45",
   "type": "intermediary",
   "cluster": "cashout",
   "note": "Post-ChipMixer consolidation wallet (2,871.03 BTC withdrawn in total per SlowMist). Address and split stylized."
  },
  {
   "id": "pcw3",
   "label": "Post-Chip Wallet 3",
   "shortAddr": "bc1q…eac3",
   "type": "intermediary",
   "cluster": "cashout",
   "note": "Post-ChipMixer consolidation wallet (2,871.03 BTC withdrawn in total per SlowMist). Address and split stylized."
  },
  {
   "id": "pbw1",
   "label": "Post-Blender Wallet",
   "shortAddr": "bc1q…28d5",
   "type": "intermediary",
   "cluster": "cashout",
   "note": "Post-Blender.io consolidation wallet. Address, amount and dates stylized."
  },
  {
   "id": "fiat1",
   "label": "Crypto-to-Fiat Svc 1",
   "shortAddr": "unnamed",
   "type": "cashout",
   "cluster": "cashout",
   "note": "Chainalysis stage five: 'bitcoin deposited to crypto-to-fiat services for cashout.' The specific services are not public; this endpoint is stylized."
  },
  {
   "id": "fiat2",
   "label": "Crypto-to-Fiat Svc 2",
   "shortAddr": "unnamed",
   "type": "cashout",
   "cluster": "cashout",
   "note": "Second stylized cash-out endpoint (see Crypto-to-Fiat Svc 1)."
  },
  {
   "id": "sz_binance",
   "label": "Binance Freeze",
   "shortAddr": "86 accounts",
   "type": "seizure",
   "cluster": "usg",
   "note": "Binance identified and froze ~$5.8M of Ronin funds spread across 86 accounts (announced by CZ, 22 Apr 2022). Shown as ~1,933 ETH-equivalent."
  },
  {
   "id": "sz_fbi",
   "label": "US Seizure (~$30M)",
   "shortAddr": "FBI / Chainalysis",
   "type": "seizure",
   "cluster": "usg",
   "note": "On 8 Sep 2022 Chainalysis announced that law enforcement had seized ~$30M of the stolen funds — roughly 10% of the theft and the first-ever seizure of DPRK-hacked crypto. Source wallets not itemized publicly; shown as ~15,000 ETH-equivalent."
  },
  {
   "id": "sz_okokrim",
   "label": "Norway Økokrim",
   "shortAddr": "NOK 60M",
   "type": "seizure",
   "cluster": "usg",
   "note": "On 16 Feb 2023 Norway's Økokrim announced the seizure of NOK 60M (~$5.9M) traced from the Ronin hack — Norway's largest-ever crypto seizure. Shown as ~2,925 ETH-equivalent."
  }
 ],
 "edges": [
  {
   "from": "ronin",
   "to": "lazarus",
   "amountBTC": 173600,
   "date": "2022-03-23",
   "kind": "hack",
   "note": "First withdrawal: 173,600 ETH in a single transaction, signed with 5 of 9 compromised validator keys."
  },
  {
   "from": "ronin",
   "to": "usdc25m",
   "amountBTC": 8562.68,
   "date": "2022-03-23",
   "kind": "hack",
   "note": "Second withdrawal: 25.5M USDC (shown throughout as its documented ETH-equivalent, 8,562.68 ETH)."
  },
  {
   "from": "lazarus",
   "to": "exf_a",
   "amountBTC": 2000,
   "date": "2022-03-28",
   "kind": "peel",
   "note": "First-hop split toward exchange deposit addresses (split stylized)."
  },
  {
   "from": "usdc25m",
   "to": "lazarus",
   "amountBTC": 8562.68,
   "date": "2022-03-28",
   "kind": "chainhop",
   "note": "25.5M USDC swapped for 8,562.68 ETH via 1inch and Uniswap before Circle could freeze it (SlowMist)."
  },
  {
   "from": "lazarus",
   "to": "exf_b",
   "amountBTC": 2500,
   "date": "2022-03-29",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exf_a",
   "to": "binance",
   "amountBTC": 2000,
   "date": "2022-03-30",
   "kind": "deposit",
   "note": "Roughly $16.7M of ETH went through centralized exchanges in the first weeks (Elliptic)."
  },
  {
   "from": "lazarus",
   "to": "exf_c",
   "amountBTC": 1750,
   "date": "2022-03-30",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "exf_b",
   "to": "huobi",
   "amountBTC": 2500,
   "date": "2022-03-31",
   "kind": "deposit",
   "note": "Across six identified Huobi deposit addresses."
  },
  {
   "from": "exf_c",
   "to": "ftx",
   "amountBTC": 1200,
   "date": "2022-04-01",
   "kind": "deposit",
   "note": "To identified FTX deposit address 0x036587e7…"
  },
  {
   "from": "exf_c",
   "to": "cryptocom",
   "amountBTC": 550,
   "date": "2022-04-02",
   "kind": "deposit",
   "note": "To identified Crypto.com deposit address 0x82906886…"
  },
  {
   "from": "lazarus",
   "to": "td_a01",
   "amountBTC": 2000,
   "date": "2022-04-03",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet; wave one of the Tornado Cash campaign begins 4 Apr 2022."
  },
  {
   "from": "lazarus",
   "to": "td_a02",
   "amountBTC": 1900,
   "date": "2022-04-03",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "lazarus",
   "to": "td_a03",
   "amountBTC": 1850,
   "date": "2022-04-04",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "lazarus",
   "to": "td_a04",
   "amountBTC": 1950,
   "date": "2022-04-04",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a01",
   "to": "tornado",
   "amountBTC": 2000,
   "date": "2022-04-04",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "td_a02",
   "to": "tornado",
   "amountBTC": 1900,
   "date": "2022-04-04",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "lazarus",
   "to": "td_a05",
   "amountBTC": 1700,
   "date": "2022-04-05",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a03",
   "to": "tornado",
   "amountBTC": 900,
   "date": "2022-04-05",
   "kind": "deposit",
   "note": "In 100 ETH increments."
  },
  {
   "from": "td_a04",
   "to": "tornado",
   "amountBTC": 1950,
   "date": "2022-04-05",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "lazarus",
   "to": "td_a06",
   "amountBTC": 1900,
   "date": "2022-04-06",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a05",
   "to": "tornado",
   "amountBTC": 1700,
   "date": "2022-04-06",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "lazarus",
   "to": "td_a07",
   "amountBTC": 1800,
   "date": "2022-04-07",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a03",
   "to": "tornado",
   "amountBTC": 950,
   "date": "2022-04-07",
   "kind": "deposit",
   "note": "In 100 ETH increments."
  },
  {
   "from": "td_a06",
   "to": "tornado",
   "amountBTC": 900,
   "date": "2022-04-07",
   "kind": "deposit",
   "note": "In 100 ETH increments."
  },
  {
   "from": "lazarus",
   "to": "td_a08",
   "amountBTC": 1950,
   "date": "2022-04-08",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a07",
   "to": "tornado",
   "amountBTC": 1800,
   "date": "2022-04-08",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "lazarus",
   "to": "td_a09",
   "amountBTC": 1600,
   "date": "2022-04-09",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a06",
   "to": "tornado",
   "amountBTC": 1000,
   "date": "2022-04-09",
   "kind": "deposit",
   "note": "In 100 ETH increments."
  },
  {
   "from": "td_a08",
   "to": "tornado",
   "amountBTC": 1950,
   "date": "2022-04-09",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "lazarus",
   "to": "td_a10",
   "amountBTC": 1900,
   "date": "2022-04-10",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a09",
   "to": "tornado",
   "amountBTC": 800,
   "date": "2022-04-10",
   "kind": "deposit",
   "note": "In 100 ETH increments."
  },
  {
   "from": "lazarus",
   "to": "td_a11",
   "amountBTC": 1700,
   "date": "2022-04-11",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a10",
   "to": "tornado",
   "amountBTC": 1900,
   "date": "2022-04-11",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "huobi",
   "to": "bw1",
   "amountBTC": 2300,
   "date": "2022-04-12",
   "kind": "chainhop",
   "note": "Withdrawn from Huobi as BTC (part of 439.78 BTC withdrawn from Huobi + FTX per SlowMist; ETH-equivalent shown)."
  },
  {
   "from": "lazarus",
   "to": "td_a12",
   "amountBTC": 1800,
   "date": "2022-04-12",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a09",
   "to": "tornado",
   "amountBTC": 800,
   "date": "2022-04-12",
   "kind": "deposit",
   "note": "In 100 ETH increments."
  },
  {
   "from": "td_a11",
   "to": "tornado",
   "amountBTC": 1700,
   "date": "2022-04-12",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "tornado",
   "to": "tw1",
   "amountBTC": 12000,
   "date": "2022-04-12",
   "kind": "chainhop",
   "note": "Tornado Cash withdrawal (attribution estimated)."
  },
  {
   "from": "lazarus",
   "to": "td_a13",
   "amountBTC": 1500,
   "date": "2022-04-13",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a12",
   "to": "tornado",
   "amountBTC": 900,
   "date": "2022-04-13",
   "kind": "deposit",
   "note": "In 100 ETH increments."
  },
  {
   "from": "lazarus",
   "to": "td_a14",
   "amountBTC": 1950,
   "date": "2022-04-14",
   "kind": "peel",
   "note": "Funding hop from the sanctioned attacker wallet."
  },
  {
   "from": "td_a13",
   "to": "tornado",
   "amountBTC": 1500,
   "date": "2022-04-14",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "td_a12",
   "to": "tornado",
   "amountBTC": 900,
   "date": "2022-04-15",
   "kind": "deposit",
   "note": "In 100 ETH increments."
  },
  {
   "from": "td_a14",
   "to": "tornado",
   "amountBTC": 1950,
   "date": "2022-04-15",
   "kind": "deposit",
   "note": "In 100 ETH increments, 20-30 deposits per day across the cluster."
  },
  {
   "from": "tornado",
   "to": "tw1",
   "amountBTC": 12000,
   "date": "2022-04-16",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "tw1",
   "to": "renbridge",
   "amountBTC": 20000,
   "date": "2022-04-18",
   "kind": "deposit",
   "note": "Swapped ETH -> renBTC via 1inch/Uniswap, burned to native BTC."
  },
  {
   "from": "ftx",
   "to": "bw1",
   "amountBTC": 1000,
   "date": "2022-04-19",
   "kind": "chainhop",
   "note": "Withdrawn from FTX as BTC (remainder of the 439.78 BTC; ETH-equivalent shown)."
  },
  {
   "from": "renbridge",
   "to": "bw1",
   "amountBTC": 20000,
   "date": "2022-04-19",
   "kind": "chainhop",
   "note": "renBTC minted and released as native BTC."
  },
  {
   "from": "bw1",
   "to": "blender",
   "amountBTC": 5000,
   "date": "2022-04-21",
   "kind": "deposit",
   "note": "Part of ~$20.5M through Blender.io (OFAC figure; ETH-equivalent shown, split stylized)."
  },
  {
   "from": "lazarus",
   "to": "td_b03",
   "amountBTC": 8300,
   "date": "2022-04-21",
   "kind": "peel",
   "note": "Second-wave funding hop; deposits resume 22 Apr after a six-day pause."
  },
  {
   "from": "binance",
   "to": "sz_binance",
   "amountBTC": 1933,
   "date": "2022-04-22",
   "kind": "seizure",
   "note": "~$5.8M frozen across 86 Binance accounts."
  },
  {
   "from": "lazarus",
   "to": "td_b04",
   "amountBTC": 8200,
   "date": "2022-04-22",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b03",
   "to": "tornado",
   "amountBTC": 8300,
   "date": "2022-04-22",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b05",
   "amountBTC": 8450,
   "date": "2022-04-23",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b04",
   "to": "tornado",
   "amountBTC": 8200,
   "date": "2022-04-23",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tornado",
   "to": "tw2",
   "amountBTC": 11000,
   "date": "2022-04-23",
   "kind": "chainhop",
   "note": "Tornado Cash withdrawal (attribution estimated)."
  },
  {
   "from": "lazarus",
   "to": "td_b06",
   "amountBTC": 8350,
   "date": "2022-04-24",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b05",
   "to": "tornado",
   "amountBTC": 4200,
   "date": "2022-04-24",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b07",
   "amountBTC": 8250,
   "date": "2022-04-25",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b05",
   "to": "tornado",
   "amountBTC": 4250,
   "date": "2022-04-25",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "td_b06",
   "to": "tornado",
   "amountBTC": 8350,
   "date": "2022-04-25",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tornado",
   "to": "tw2",
   "amountBTC": 11000,
   "date": "2022-04-25",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b08",
   "amountBTC": 8600,
   "date": "2022-04-26",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b07",
   "to": "tornado",
   "amountBTC": 8250,
   "date": "2022-04-26",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b09",
   "amountBTC": 8150,
   "date": "2022-04-27",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b08",
   "to": "tornado",
   "amountBTC": 8600,
   "date": "2022-04-27",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tornado",
   "to": "tw3",
   "amountBTC": 10500,
   "date": "2022-04-27",
   "kind": "chainhop",
   "note": "Tornado Cash withdrawal (attribution estimated)."
  },
  {
   "from": "lazarus",
   "to": "td_b02",
   "amountBTC": 8500,
   "date": "2022-04-28",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b09",
   "to": "tornado",
   "amountBTC": 8150,
   "date": "2022-04-28",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tw2",
   "to": "renbridge",
   "amountBTC": 18000,
   "date": "2022-04-28",
   "kind": "deposit",
   "note": "Swapped ETH -> renBTC via 1inch/Uniswap, burned to native BTC."
  },
  {
   "from": "lazarus",
   "to": "td_b10",
   "amountBTC": 8050,
   "date": "2022-04-29",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b02",
   "to": "tornado",
   "amountBTC": 8500,
   "date": "2022-04-29",
   "kind": "deposit",
   "note": "Documented 8,500 ETH tranche, 29 Apr 2022."
  },
  {
   "from": "tornado",
   "to": "tw3",
   "amountBTC": 10500,
   "date": "2022-04-29",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "td_b10",
   "to": "tornado",
   "amountBTC": 4000,
   "date": "2022-04-30",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b11",
   "amountBTC": 8400,
   "date": "2022-05-01",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b10",
   "to": "tornado",
   "amountBTC": 4050,
   "date": "2022-05-01",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b01",
   "amountBTC": 8700,
   "date": "2022-05-02",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b11",
   "to": "tornado",
   "amountBTC": 8400,
   "date": "2022-05-02",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tornado",
   "to": "tw4",
   "amountBTC": 10200,
   "date": "2022-05-02",
   "kind": "chainhop",
   "note": "Tornado Cash withdrawal (attribution estimated)."
  },
  {
   "from": "tw3",
   "to": "renbridge",
   "amountBTC": 17000,
   "date": "2022-05-02",
   "kind": "deposit",
   "note": "Swapped ETH -> renBTC via 1inch/Uniswap, burned to native BTC."
  },
  {
   "from": "renbridge",
   "to": "bw2",
   "amountBTC": 22000,
   "date": "2022-05-03",
   "kind": "chainhop",
   "note": "renBTC minted and released as native BTC."
  },
  {
   "from": "td_b01",
   "to": "tornado",
   "amountBTC": 8700,
   "date": "2022-05-03",
   "kind": "deposit",
   "note": "Documented 8,700 ETH tranche, 3 May 2022."
  },
  {
   "from": "bw2",
   "to": "blender",
   "amountBTC": 5250,
   "date": "2022-05-04",
   "kind": "deposit",
   "note": "Final Blender.io tranche days before the 6 May 2022 sanction."
  },
  {
   "from": "lazarus",
   "to": "td_b12",
   "amountBTC": 8550,
   "date": "2022-05-04",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "tornado",
   "to": "tw4",
   "amountBTC": 10300,
   "date": "2022-05-04",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "blender",
   "to": "pbw1",
   "amountBTC": 8600,
   "date": "2022-05-05",
   "kind": "chainhop",
   "note": "Mixed BTC out of Blender.io (stylized)."
  },
  {
   "from": "td_b12",
   "to": "tornado",
   "amountBTC": 8550,
   "date": "2022-05-05",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b13",
   "amountBTC": 7900,
   "date": "2022-05-06",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b13",
   "to": "tornado",
   "amountBTC": 7900,
   "date": "2022-05-07",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tw4",
   "to": "renbridge",
   "amountBTC": 16000,
   "date": "2022-05-07",
   "kind": "deposit",
   "note": "Swapped ETH -> renBTC via 1inch/Uniswap, burned to native BTC."
  },
  {
   "from": "renbridge",
   "to": "bw3",
   "amountBTC": 24000,
   "date": "2022-05-08",
   "kind": "chainhop",
   "note": "renBTC minted and released as native BTC."
  },
  {
   "from": "tornado",
   "to": "tw5",
   "amountBTC": 10000,
   "date": "2022-05-08",
   "kind": "chainhop",
   "note": "Tornado Cash withdrawal (attribution estimated)."
  },
  {
   "from": "lazarus",
   "to": "td_b14",
   "amountBTC": 8650,
   "date": "2022-05-09",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b14",
   "to": "tornado",
   "amountBTC": 4300,
   "date": "2022-05-10",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b15",
   "amountBTC": 8100,
   "date": "2022-05-11",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b14",
   "to": "tornado",
   "amountBTC": 4350,
   "date": "2022-05-11",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tornado",
   "to": "tw5",
   "amountBTC": 10000,
   "date": "2022-05-11",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "td_b15",
   "to": "tornado",
   "amountBTC": 8100,
   "date": "2022-05-12",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b16",
   "amountBTC": 8200,
   "date": "2022-05-13",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b16",
   "to": "tornado",
   "amountBTC": 4100,
   "date": "2022-05-14",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tw5",
   "to": "renbridge",
   "amountBTC": 15000,
   "date": "2022-05-14",
   "kind": "deposit",
   "note": "Swapped ETH -> renBTC via 1inch/Uniswap, burned to native BTC."
  },
  {
   "from": "td_b16",
   "to": "tornado",
   "amountBTC": 4100,
   "date": "2022-05-15",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tornado",
   "to": "tw6",
   "amountBTC": 9500,
   "date": "2022-05-15",
   "kind": "chainhop",
   "note": "Tornado Cash withdrawal (attribution estimated)."
  },
  {
   "from": "lazarus",
   "to": "td_b17",
   "amountBTC": 8350,
   "date": "2022-05-16",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b17",
   "to": "tornado",
   "amountBTC": 4150,
   "date": "2022-05-17",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "lazarus",
   "to": "td_b18",
   "amountBTC": 7900,
   "date": "2022-05-18",
   "kind": "peel",
   "note": ""
  },
  {
   "from": "td_b17",
   "to": "tornado",
   "amountBTC": 4200,
   "date": "2022-05-18",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tornado",
   "to": "tw6",
   "amountBTC": 9500,
   "date": "2022-05-18",
   "kind": "chainhop",
   "note": ""
  },
  {
   "from": "td_b18",
   "to": "tornado",
   "amountBTC": 3950,
   "date": "2022-05-19",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "td_b18",
   "to": "tornado",
   "amountBTC": 3950,
   "date": "2022-05-20",
   "kind": "deposit",
   "note": ""
  },
  {
   "from": "tw6",
   "to": "renbridge",
   "amountBTC": 14000,
   "date": "2022-05-21",
   "kind": "deposit",
   "note": "Swapped ETH -> renBTC via 1inch/Uniswap, burned to native BTC."
  },
  {
   "from": "renbridge",
   "to": "bw4",
   "amountBTC": 22000,
   "date": "2022-05-22",
   "kind": "chainhop",
   "note": "renBTC minted and released as native BTC."
  },
  {
   "from": "tornado",
   "to": "tw7",
   "amountBTC": 21000,
   "date": "2022-05-22",
   "kind": "chainhop",
   "note": "Tornado Cash withdrawal (attribution estimated)."
  },
  {
   "from": "renbridge",
   "to": "bw5",
   "amountBTC": 12000,
   "date": "2022-05-24",
   "kind": "chainhop",
   "note": "renBTC minted and released as native BTC."
  },
  {
   "from": "tornado",
   "to": "tw8",
   "amountBTC": 20000,
   "date": "2022-05-27",
   "kind": "chainhop",
   "note": "Tornado Cash withdrawal (attribution estimated)."
  },
  {
   "from": "bw2",
   "to": "chip",
   "amountBTC": 8000,
   "date": "2022-06-08",
   "kind": "deposit",
   "note": "Part of 3,460.68 BTC into ChipMixer (SlowMist; ETH-equivalent shown, split stylized)."
  },
  {
   "from": "pbw1",
   "to": "fiat2",
   "amountBTC": 4000,
   "date": "2022-06-15",
   "kind": "cashout",
   "note": ""
  },
  {
   "from": "bw3",
   "to": "chip",
   "amountBTC": 12000,
   "date": "2022-06-24",
   "kind": "deposit",
   "note": "Part of 3,460.68 BTC into ChipMixer (SlowMist; ETH-equivalent shown, split stylized)."
  },
  {
   "from": "chip",
   "to": "pcw1",
   "amountBTC": 11000,
   "date": "2022-07-10",
   "kind": "chainhop",
   "note": "ChipMixer withdrawal in fixed-size 'chips'."
  },
  {
   "from": "bw4",
   "to": "chip",
   "amountBTC": 10600,
   "date": "2022-07-15",
   "kind": "deposit",
   "note": "Part of 3,460.68 BTC into ChipMixer (SlowMist; ETH-equivalent shown, split stylized)."
  },
  {
   "from": "chip",
   "to": "pcw2",
   "amountBTC": 10500,
   "date": "2022-07-30",
   "kind": "chainhop",
   "note": "ChipMixer withdrawal in fixed-size 'chips'."
  },
  {
   "from": "bw5",
   "to": "chip",
   "amountBTC": 6000,
   "date": "2022-08-02",
   "kind": "deposit",
   "note": "Part of 3,460.68 BTC into ChipMixer (SlowMist; ETH-equivalent shown, split stylized)."
  },
  {
   "from": "chip",
   "to": "pcw3",
   "amountBTC": 8900,
   "date": "2022-08-22",
   "kind": "chainhop",
   "note": "ChipMixer withdrawal in fixed-size 'chips'."
  },
  {
   "from": "bw5",
   "to": "sz_fbi",
   "amountBTC": 6000,
   "date": "2022-09-08",
   "kind": "seizure",
   "note": "Part of the ~$30M US seizure (source wallets stylized)."
  },
  {
   "from": "tw8",
   "to": "sz_fbi",
   "amountBTC": 9000,
   "date": "2022-09-08",
   "kind": "seizure",
   "note": "Part of the ~$30M US seizure (source wallets stylized)."
  },
  {
   "from": "pcw1",
   "to": "fiat1",
   "amountBTC": 6000,
   "date": "2022-09-20",
   "kind": "cashout",
   "note": "Cash-out deposits; timing and split stylized."
  },
  {
   "from": "pcw2",
   "to": "fiat2",
   "amountBTC": 5000,
   "date": "2022-10-18",
   "kind": "cashout",
   "note": ""
  },
  {
   "from": "pcw3",
   "to": "fiat1",
   "amountBTC": 3000,
   "date": "2022-12-06",
   "kind": "cashout",
   "note": ""
  },
  {
   "from": "pcw3",
   "to": "sz_okokrim",
   "amountBTC": 2925,
   "date": "2023-02-16",
   "kind": "seizure",
   "note": "NOK 60M (~$5.9M) seized by Økokrim, returned toward Sky Mavis users."
  }
 ],
 "chapters": [
  {
   "id": "ch1",
   "title": "Five Signatures",
   "tStart": "2022-03-23",
   "tEnd": "2022-03-29",
   "caption": "On 23 March 2022 two transactions drained the Ronin Bridge of 173,600 ETH and 25.5M USDC, about $620M, signed with five of its nine validator keys. Four keys came from Sky Mavis nodes compromised after an engineer opened a fake job offer. The fifth was the Axie DAO validator, still reachable through an allowlist left unrevoked since November 2021. The theft went unnoticed for six days, until a user's withdrawal failed.",
   "focus": [
    "ronin",
    "lazarus",
    "usdc25m"
   ]
  },
  {
   "id": "ch2",
   "title": "Burning the Stablecoin",
   "tStart": "2022-03-23",
   "tEnd": "2022-04-03",
   "caption": "The ETH could not be frozen, but Circle could blacklist the USDC. The 25.5M USDC was swapped through 1inch and Uniswap into 8,562.68 ETH before that could happen.",
   "focus": [
    "usdc25m",
    "lazarus"
   ]
  },
  {
   "id": "ch3",
   "title": "The Exchange Run",
   "tStart": "2022-03-28",
   "tEnd": "2022-04-24",
   "caption": "About $16.7M of ETH went to exchange deposit addresses at Binance, Huobi (six accounts), FTX and Crypto.com. On 14 April OFAC sanctioned the attacker's address and the FBI attributed the theft to Lazarus Group. On 22 April Binance announced it had frozen about $5.8M across 86 accounts.",
   "focus": [
    "exf_a",
    "exf_b",
    "exf_c",
    "binance",
    "huobi",
    "ftx",
    "cryptocom",
    "sz_binance"
   ]
  },
  {
   "id": "ch4",
   "title": "One Hundred ETH at a Time",
   "tStart": "2022-04-04",
   "tEnd": "2022-04-15",
   "caption": "From 4 April, fresh wallets fed Tornado Cash's 100 ETH pool at 20 to 30 deposits a day, 1,750 hundred-ETH deposits in all. Elliptic counted about $80M through the mixer by 14 April. On the 16th the deposits stopped.",
   "focus": [
    "lazarus",
    "td_a01",
    "td_a05",
    "td_a09",
    "tornado"
   ]
  },
  {
   "id": "ch5",
   "title": "The Firehose",
   "tStart": "2022-04-22",
   "tEnd": "2022-05-19",
   "caption": "Deposits resumed on 22 April in tranches of 3,000 to 8,700 ETH, including 8,500 ETH on 29 April and 8,700 ETH on 3 May. By 19 May the run was essentially over. SlowMist counted 175,100 ETH of Ronin funds through Tornado Cash, nearly the entire theft.",
   "focus": [
    "td_b01",
    "td_b02",
    "lazarus",
    "tornado"
   ]
  },
  {
   "id": "ch6",
   "title": "Crossing to Bitcoin",
   "tStart": "2022-04-22",
   "tEnd": "2022-08-22",
   "caption": "Mixed ETH left Tornado Cash into fresh wallets, was swapped to renBTC on 1inch and Uniswap, and crossed the Ren bridge to Bitcoin for a second round of mixing. Blender.io processed about $20.5M. ChipMixer took 3,460.68 BTC, about $73M, and 2,871 BTC had been withdrawn by 22 August.",
   "focus": [
    "tornado",
    "tw1",
    "renbridge",
    "bw1",
    "bw3",
    "blender",
    "chip"
   ]
  },
  {
   "id": "ch7",
   "title": "Sanctions and Clawbacks",
   "tStart": "2022-05-06",
   "tEnd": "2023-02-16",
   "caption": "On 6 May 2022 OFAC sanctioned Blender.io, the first mixer it had ever designated, citing $20.5M of Ronin funds. Tornado Cash was sanctioned on 8 August. On 8 September Chainalysis reported about $30M seized, the first recovery of crypto stolen by North Korean hackers and roughly 10% of the theft. On 16 February 2023 Norway's Økokrim seized NOK 60M more.",
   "focus": [
    "blender",
    "chip",
    "tornado",
    "sz_fbi",
    "sz_okokrim"
   ]
  }
 ]
};
