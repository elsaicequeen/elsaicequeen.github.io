window.CASE_DATA_004 = {
 "meta": {
  "title": "The Poly Network exploit and the $611M that came back",
  "caseNo": "004",
  "assetLabel": "USD-M",
  "disclaimer": "Demonstrative reconstruction for an industry post-mortem. It is not evidence and not a court record: no US prosecution arose from this incident. Amounts are shown in millions of US dollars at August 2021 prices. The headline facts (the 10 August 2021 keeper-swap exploit, about $611M drained across Ethereum, BSC and Polygon, the published attacker addresses, Tether's freeze of 33,431,197 USDT, the 13.37 ETH tip, the Curve and Ellipsis moves, the on-chain Q&A, the return milestones, the joint multisig, the $500,000 bounty offer, the 23 August key handover and the last funds returned by 25 August) come from the cited public record. Per-asset nodes are sub-ledger views of single attacker addresses, drawn separately for legibility. Per-transaction splits of the return tranches, the BSC staging node, the multisig DAI release date, the final unfreeze date and the gas-funding chain are stylised. Per-asset USD conversions are approximate and sum slightly below the reported totals.",
  "sources": [
   {
    "name": "Chainalysis, 11 Aug 2021: Poly Network attacker returning funds after pulling off biggest DeFi theft ever",
    "url": "https://www.chainalysis.com/blog/poly-network-hack-august-2021/"
   },
   {
    "name": "Kudelski Security Research, 12 Aug 2021: The Poly Network hack explained (keeper spoof / sighash collision)",
    "url": "https://research.kudelskisecurity.com/2021/08/12/the-poly-network-hack-explained/"
   },
   {
    "name": "SlowMist, 11 Aug 2021: The analysis and Q&A of Poly Network being hacked (asset itemization, Ellipsis, fund-source tracing)",
    "url": "https://slowmist.medium.com/the-analysis-and-q-a-of-poly-network-being-hacked-8112a35beb39"
   },
   {
    "name": "The Block, 12 Aug 2021: Poly Network attacker returns $256 million of the stolen cryptocurrency",
    "url": "https://www.theblock.co/post/114189/poly-hack-attacker-return-funds-id-slowmist"
   },
   {
    "name": "Merkle Science: Hack Track: analysis of the Poly Network hack ($427M/19 Aug, $141M multisig, 23 Aug key)",
    "url": "https://www.merklescience.com/blog/hack-track-an-analysis-of-poly-network-hack-and-latest-related-events"
   },
   {
    "name": "CNBC, 23 Aug 2021: Hacker behind $600 million crypto heist returns final slice of stolen funds",
    "url": "https://www.cnbc.com/2021/08/23/poly-network-hacker-returns-remaining-cryptocurrency.html"
   },
   {
    "name": "The Register, 14 Aug 2021: 'I was offered $500k as a thank-you bounty', says crypto-thief",
    "url": "https://www.theregister.com/2021/08/14/poly_network_payment/"
   },
   {
    "name": "The Currency Analytics: Paolo Ardoino explains the ~20-minute USDT freeze after the Poly Network hack",
    "url": "https://thecurrencyanalytics.com/finance/paolo-ardoino-of-tether-usdt-explains-in-details-what-happened-to-the-polynetwork-hack-32177"
   },
   {
    "name": "rekt.news: Poly Network (asset table and exploit write-up)",
    "url": "https://rekt.news/polynetwork-rekt"
   },
   {
    "name": "Wikipedia: Poly Network exploit (timeline; last funds returned 25 Aug 2021)",
    "url": "https://en.wikipedia.org/wiki/Poly_Network_exploit"
   }
  ]
 },
 "entities": [
  {
   "id": "lp_eth",
   "label": "Poly Lock Proxy (Ethereum)",
   "shortAddr": "0x250e…c906",
   "type": "exchange",
   "cluster": "victim",
   "note": "Victim contract: Poly Network's Ethereum LockProxy, custodian of cross-chain user deposits. Drained of nine assets on 10 Aug 2021 — the largest DeFi theft on record at the time (~$611M across three chains)."
  },
  {
   "id": "lp_bsc",
   "label": "Poly Lock Proxy (BSC)",
   "shortAddr": "0x2f7a…1f03",
   "type": "exchange",
   "cluster": "victim",
   "note": "Victim contract on Binance Smart Chain; ~$253M drained (The Block: ~$119M stablecoins, 26,629 pegged ETH, ~1,000 BTCB, plus BNB)."
  },
  {
   "id": "lp_pol",
   "label": "Poly Lock Proxy (Polygon)",
   "shortAddr": "0x28FF…1212",
   "type": "exchange",
   "cluster": "victim",
   "note": "Victim contract on Polygon; 85,089,610 USDC drained — the entire Polygon leg (SlowMist)."
  },
  {
   "id": "ccm_eth",
   "label": "EthCrossChainManager (ETH)",
   "shortAddr": "contract",
   "type": "intermediary",
   "cluster": "victim",
   "note": "Poly's cross-chain executor. Its verifyHeaderAndExecuteTx will call any contract a validly-signed cross-chain message names — including, fatally, the contract that stores the keeper key (Kudelski Security analysis)."
  },
  {
   "id": "ccd_eth",
   "label": "EthCrossChainData (keeper book)",
   "shortAddr": "contract",
   "type": "intermediary",
   "cluster": "victim",
   "note": "Stores the public key of the 'keeper' whose signature authenticates cross-chain messages. The attacker overwrote it with their own key via a crafted message — no private key was ever stolen (Kudelski Security)."
  },
  {
   "id": "ccm_bsc",
   "label": "CrossChainManager (BSC)",
   "shortAddr": "contract",
   "type": "intermediary",
   "cluster": "victim",
   "note": "BSC deployment of the same manager/data pair; the identical keeper-spoof was executed there minutes apart."
  },
  {
   "id": "ccm_pol",
   "label": "CrossChainManager (Polygon)",
   "shortAddr": "contract",
   "type": "intermediary",
   "cluster": "victim",
   "note": "Polygon deployment of the same manager/data pair; third leg of the same exploit."
  },
  {
   "id": "atk_eth",
   "label": "Attacker (Ethereum)",
   "shortAddr": "0xC8a6…3963",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "Attack address on Ethereum, published by Poly Network within hours (0xC8a65Fadf0e0dDAf421F28FEAb69Bf6E2E589963). Also the mouthpiece: the attacker's Q&A and negotiations ran through this address's transaction input data."
  },
  {
   "id": "atk_bsc",
   "label": "Attacker (BSC)",
   "shortAddr": "0x0D6e…2C71",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "Attack address on Binance Smart Chain, published by Poly Network (0x0D6e286A7cfD25E0c01fEe9756765D8033B32C71)."
  },
  {
   "id": "atk_pol",
   "label": "Attacker (Polygon)",
   "shortAddr": "0x5dc3…3214",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "Attack address on Polygon, published by Poly Network (0x5dc3603C9D42Ff184153a8a9094a73d461663214)."
  },
  {
   "id": "gas_eth",
   "label": "Gas wallet (ETH)",
   "shortAddr": "funding",
   "type": "intermediary",
   "cluster": "lichtenstein",
   "note": "Pre-attack gas funding on Ethereum. SlowMist traced the attacker's initial funds to Monero exchanged into ETH/BNB/MATIC; the hop structure here is stylized."
  },
  {
   "id": "gas_bsc",
   "label": "Gas wallet (BSC)",
   "shortAddr": "funding",
   "type": "intermediary",
   "cluster": "lichtenstein",
   "note": "Pre-attack gas funding on BSC (stylized hop; SlowMist attribution as above)."
  },
  {
   "id": "gas_pol",
   "label": "Gas wallet (Polygon)",
   "shortAddr": "funding",
   "type": "intermediary",
   "cluster": "lichtenstein",
   "note": "Pre-attack gas funding on Polygon (stylized hop; SlowMist attribution as above)."
  },
  {
   "id": "xmr_src",
   "label": "XMR source (stylized)",
   "shortAddr": "—",
   "type": "intermediary",
   "cluster": "chainhop",
   "note": "SlowMist reported the attacker's seed money was Monero swapped into gas coins, and claimed to hold the attacker's email, IP and device fingerprints. Everything upstream of the gas wallets is stylized."
  },
  {
   "id": "hoo",
   "label": "Hoo.com (gas funding)",
   "shortAddr": "acct",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Exchange SlowMist named as the venue where the Monero was swapped into ETH/BNB/MATIC used to fuel the attack. Amounts were small; drawn at nominal width."
  },
  {
   "id": "p_usdc_e",
   "label": "USDC position (ETH)",
   "shortAddr": "96,389,444 USDC",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "96,389,444 USDC taken on Ethereum (Elliptic/Chainalysis itemization). Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_usdt_e",
   "label": "USDT position (frozen)",
   "shortAddr": "33,431,197 USDT",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "33,431,197 USDT — blacklisted by Tether before it could move. The only leg the attacker never controlled after hour one. Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_weth",
   "label": "WETH position",
   "shortAddr": "26,109 WETH",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "26,109 WETH (~$84M at 10 Aug 2021 prices). Later parked in the joint multisig until the 23 Aug key handover. Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_wbtc",
   "label": "WBTC position",
   "shortAddr": "1,032 WBTC",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "1,032 WBTC (~$47M). Later parked in the joint multisig until 23 Aug. Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_dai",
   "label": "DAI position",
   "shortAddr": "673,227 DAI",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "673,227 DAI, promptly pushed into Curve together with the USDC. Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_uni",
   "label": "UNI position",
   "shortAddr": "43,023 UNI",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "43,023 UNI (~$1.2M). Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_renbtc",
   "label": "renBTC position",
   "shortAddr": "14.47 renBTC",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "14.47 renBTC (~$0.7M). Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_shib",
   "label": "SHIB position",
   "shortAddr": "259.7B SHIB",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "259,737,345,149 SHIB (~$2M). Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_fei",
   "label": "FEI position",
   "shortAddr": "616,082 FEI",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "616,082 FEI. Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "dai_out",
   "label": "DAI (post-Curve, 96.9M)",
   "shortAddr": "96,942,061 DAI",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "The stablecoin stack after the Curve round-trip: 96,942,061 DAI (Chainalysis). DAI has no issuer blacklist, so this position was freeze-proof — and it was still given back."
  },
  {
   "id": "curve",
   "label": "Curve 3pool",
   "shortAddr": "DEX pool",
   "type": "exchange",
   "cluster": "services",
   "note": "Within hours of Tether's freeze the attacker moved the USDC+DAI through Curve's 3pool — widely read as insurance against a matching Circle freeze on the USDC (Chainalysis)."
  },
  {
   "id": "pos_3crv",
   "label": "3CRV LP position",
   "shortAddr": "95,269,796 3CRV",
   "type": "intermediary",
   "cluster": "services",
   "note": "95,269,796 3CRV LP tokens received for the deposit, then burned the same day for DAI (Chainalysis)."
  },
  {
   "id": "ellipsis",
   "label": "Ellipsis Finance (BSC)",
   "shortAddr": "DEX pool",
   "type": "exchange",
   "cluster": "services",
   "note": "Curve fork on BSC. SlowMist: the attacker added ~$120M of liquidity (≈87.6M USDC + ≈32.1M BUSD) — the BSC equivalent of the Curve maneuver."
  },
  {
   "id": "pos_eps",
   "label": "Ellipsis LP position",
   "shortAddr": "LP tokens",
   "type": "intermediary",
   "cluster": "services",
   "note": "The ~$119.7M Ellipsis liquidity position; withdrawn the next day ahead of the give-back."
  },
  {
   "id": "p_usdc_b",
   "label": "USDC position (BSC)",
   "shortAddr": "87,603,373 USDC",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "87,603,373 USDC taken on BSC (SlowMist). Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_ethb",
   "label": "Pegged-ETH position (BSC)",
   "shortAddr": "26,629 ETH",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "26,629 Binance-pegged ETH (~$86M; The Block). Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_btcb",
   "label": "BTCB position",
   "shortAddr": "≈1,000 BTCB",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "≈1,000 BTCB (~$46.4M; The Block). Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_bnb",
   "label": "BNB position",
   "shortAddr": "6,613 BNB",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "6,613 BNB (~$2.6M). Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "p_busd",
   "label": "BUSD position",
   "shortAddr": "≈32.1M BUSD",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "≈32.1M BUSD — the figure SlowMist gave for the Ellipsis deposit; BSC stablecoins totaled ~$119M. Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "stage_bsc",
   "label": "BSC staging (stylized)",
   "shortAddr": "withdrawal",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Stylized staging node for the Ellipsis withdrawal — on-chain the liquidity came back to the attack address before being returned."
  },
  {
   "id": "p_usdc_p",
   "label": "USDC position (Polygon)",
   "shortAddr": "85,089,610 USDC",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "85,089,610 USDC — the whole Polygon leg (SlowMist). First leg to be returned in full, on 11 Aug. Stylized sub-ledger: asset positions inside a single attacker address drawn as separate nodes for legibility; the tokens never left the address until the give-back."
  },
  {
   "id": "hanashiro",
   "label": "hanashiro.eth",
   "shortAddr": "0x8f61…tip",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Bystander who warned the attacker via transaction input data — 'DONT USE YOUR USDT TOKEN, ITS BLACKLISTED' — and was tipped 13.37 ETH for it. Reportedly pledged the tip to charity. The only money in this case that never went back."
  },
  {
   "id": "qa_board",
   "label": "On-chain Q&A (tx input data)",
   "shortAddr": "zero-value txs",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Not a wallet: the attacker's press office. Zero-value transactions whose input data carried a self-interview ('WHY HACKING? FOR FUN :)'), return negotiations, and finally the multisig key itself. Preserved verbatim on-chain (Chainalysis reproduced the messages)."
  },
  {
   "id": "ret_eth",
   "label": "Poly recovery (Ethereum)",
   "shortAddr": "return addr",
   "type": "seizure",
   "cluster": "usg",
   "note": "Recovery address Poly Network published on the morning of 11 Aug in its open letter asking for the money back. Ethereum-leg returns and the multisig unlocks landed here."
  },
  {
   "id": "ret_bsc",
   "label": "Poly recovery (BSC)",
   "shortAddr": "return addr",
   "type": "seizure",
   "cluster": "usg",
   "note": "Recovery address for the BSC leg, published 11 Aug. The Block counted ~$256M returned across chains by 12 Aug."
  },
  {
   "id": "ret_pol",
   "label": "Poly recovery (Polygon)",
   "shortAddr": "return addr",
   "type": "seizure",
   "cluster": "usg",
   "note": "Recovery address for the Polygon leg, published 11 Aug; the 85M USDC was home the same day."
  },
  {
   "id": "multisig",
   "label": "3-of-4 multisig (joint)",
   "shortAddr": "3/4 multisig",
   "type": "seizure",
   "cluster": "usg",
   "note": "Joint account set up 13 Aug: the attacker moved the big Ethereum positions here, keeping one key share as leverage while negotiating. Poly's 19 Aug update: 28,953 ETH + 1,032 WBTC (~$141M) still inside, waiting on the attacker's key — handed over publicly on 23 Aug."
  },
  {
   "id": "tether_frz",
   "label": "Tether freeze (33.4M USDT)",
   "shortAddr": "blacklist",
   "type": "seizure",
   "cluster": "usg",
   "note": "Tether blacklisted the attack address fast — CTO Paolo Ardoino said the freeze was organized within about 20 minutes of the first alerts. The 33,431,197 USDT sat immobilized for the whole drama and was the last tranche released, in the final-unfreezing process Poly announced 23 Aug."
  },
  {
   "id": "poly_restored",
   "label": "Poly Bridge (restored)",
   "shortAddr": "protocol",
   "type": "exchange",
   "cluster": "cashout",
   "note": "The protocol with custody restored. Poly Network relaunched, thanked 'Mr. White Hat', and turned the declined $500,000 bounty into a bug-bounty program on Immunefi."
  },
  {
   "id": "users",
   "label": "Users made whole",
   "shortAddr": "—",
   "type": "seizure",
   "cluster": "cashout",
   "note": "Terminal state, and the inversion of this whole genre: full restitution. All user assets recovered; the last of the money was back by 25 Aug 2021 (Wikipedia). Losses to end users: zero, minus fifteen days of terror."
  }
 ],
 "edges": [
  {
   "from": "xmr_src",
   "to": "hoo",
   "amountBTC": 0.02,
   "date": "2021-08-09",
   "kind": "deposit",
   "note": "Stylized: SlowMist traced the seed funds to Monero swapped at Hoo.com into the gas coins of all three chains. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "hoo",
   "to": "gas_eth",
   "amountBTC": 0.01,
   "date": "2021-08-09",
   "kind": "chainhop",
   "note": "Gas withdrawal, ETH side. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "hoo",
   "to": "gas_bsc",
   "amountBTC": 0.01,
   "date": "2021-08-09",
   "kind": "chainhop",
   "note": "Gas withdrawal, BSC side. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "hoo",
   "to": "gas_pol",
   "amountBTC": 0.01,
   "date": "2021-08-09",
   "kind": "chainhop",
   "note": "Gas withdrawal, Polygon side. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "gas_eth",
   "to": "atk_eth",
   "amountBTC": 0.01,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "Gas to the Ethereum attack address. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "gas_bsc",
   "to": "atk_bsc",
   "amountBTC": 0.01,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "Gas to the BSC attack address. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "gas_pol",
   "to": "atk_pol",
   "amountBTC": 0.01,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "Gas to the Polygon attack address. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "atk_eth",
   "to": "ccd_eth",
   "amountBTC": 0.01,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "The spoof: a crafted cross-chain message steers verifyHeaderAndExecuteTx into calling putCurEpochConPubKeyBytes(bytes) on the data contract — the attacker found that f1121318093(bytes,bytes,uint64) collides with it on the 4-byte sighash 0x41973cd9 — overwriting the keeper key with their own (Kudelski Security). Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "ccd_eth",
   "to": "ccm_eth",
   "amountBTC": 0.01,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "With the keeper key swapped, the manager now authenticates attacker-signed unlock instructions as genuine cross-chain messages. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "atk_bsc",
   "to": "ccm_bsc",
   "amountBTC": 0.01,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Identical keeper-spoof run against the BSC deployment. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "atk_pol",
   "to": "ccm_pol",
   "amountBTC": 0.01,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Identical keeper-spoof run against the Polygon deployment. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "lp_eth",
   "to": "atk_eth",
   "amountBTC": 96.4,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 96,389,444 USDC (Elliptic/Chainalysis itemization)."
  },
  {
   "from": "lp_eth",
   "to": "atk_eth",
   "amountBTC": 33.4,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 33,431,197 USDT — frozen by Tether within the hour and never usable."
  },
  {
   "from": "lp_eth",
   "to": "atk_eth",
   "amountBTC": 84.0,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 26,109 WETH (~$84M at 10 Aug prices)."
  },
  {
   "from": "lp_eth",
   "to": "atk_eth",
   "amountBTC": 47.0,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 1,032 WBTC (~$47M)."
  },
  {
   "from": "lp_eth",
   "to": "atk_eth",
   "amountBTC": 0.7,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 673,227 DAI."
  },
  {
   "from": "lp_eth",
   "to": "atk_eth",
   "amountBTC": 1.2,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 43,023 UNI (~$1.2M)."
  },
  {
   "from": "lp_eth",
   "to": "atk_eth",
   "amountBTC": 0.7,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 14.47 renBTC (~$0.7M)."
  },
  {
   "from": "lp_eth",
   "to": "atk_eth",
   "amountBTC": 2.0,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 259,737,345,149 SHIB (~$2M)."
  },
  {
   "from": "lp_eth",
   "to": "atk_eth",
   "amountBTC": 0.6,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 616,082 FEI. Poly reported the Ethereum leg at ~$273.5M; per-asset USD conversions here sum slightly lower (see disclaimer)."
  },
  {
   "from": "lp_bsc",
   "to": "atk_bsc",
   "amountBTC": 87.6,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 87,603,373 USDC on BSC (SlowMist)."
  },
  {
   "from": "lp_bsc",
   "to": "atk_bsc",
   "amountBTC": 86.0,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 26,629 Binance-pegged ETH (~$86M; The Block)."
  },
  {
   "from": "lp_bsc",
   "to": "atk_bsc",
   "amountBTC": 46.4,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: ≈1,000 BTCB (~$46.4M; The Block)."
  },
  {
   "from": "lp_bsc",
   "to": "atk_bsc",
   "amountBTC": 2.6,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 6,613 BNB (~$2.6M)."
  },
  {
   "from": "lp_bsc",
   "to": "atk_bsc",
   "amountBTC": 32.1,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: ≈32.1M BUSD. BSC leg reported at ~$253M total."
  },
  {
   "from": "lp_pol",
   "to": "atk_pol",
   "amountBTC": 85.1,
   "date": "2021-08-10",
   "kind": "hack",
   "note": "Unlock: 85,089,610 USDC — the entire Polygon leg (SlowMist)."
  },
  {
   "from": "atk_eth",
   "to": "p_usdc_e",
   "amountBTC": 96.4,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0xC8a6…3963 drawn as its own node."
  },
  {
   "from": "atk_eth",
   "to": "p_usdt_e",
   "amountBTC": 33.4,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0xC8a6…3963 drawn as its own node."
  },
  {
   "from": "atk_eth",
   "to": "p_weth",
   "amountBTC": 84.0,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0xC8a6…3963 drawn as its own node."
  },
  {
   "from": "atk_eth",
   "to": "p_wbtc",
   "amountBTC": 47.0,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0xC8a6…3963 drawn as its own node."
  },
  {
   "from": "atk_eth",
   "to": "p_dai",
   "amountBTC": 0.7,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0xC8a6…3963 drawn as its own node."
  },
  {
   "from": "atk_eth",
   "to": "p_uni",
   "amountBTC": 1.2,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0xC8a6…3963 drawn as its own node."
  },
  {
   "from": "atk_eth",
   "to": "p_renbtc",
   "amountBTC": 0.7,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0xC8a6…3963 drawn as its own node."
  },
  {
   "from": "atk_eth",
   "to": "p_shib",
   "amountBTC": 2.0,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0xC8a6…3963 drawn as its own node."
  },
  {
   "from": "atk_eth",
   "to": "p_fei",
   "amountBTC": 0.6,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0xC8a6…3963 drawn as its own node."
  },
  {
   "from": "atk_bsc",
   "to": "p_usdc_b",
   "amountBTC": 87.6,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0x0D6e…2C71 drawn as its own node."
  },
  {
   "from": "atk_bsc",
   "to": "p_ethb",
   "amountBTC": 86.0,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0x0D6e…2C71 drawn as its own node."
  },
  {
   "from": "atk_bsc",
   "to": "p_btcb",
   "amountBTC": 46.4,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0x0D6e…2C71 drawn as its own node."
  },
  {
   "from": "atk_bsc",
   "to": "p_bnb",
   "amountBTC": 2.6,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0x0D6e…2C71 drawn as its own node."
  },
  {
   "from": "atk_bsc",
   "to": "p_busd",
   "amountBTC": 32.1,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): asset position inside 0x0D6e…2C71 drawn as its own node."
  },
  {
   "from": "atk_pol",
   "to": "p_usdc_p",
   "amountBTC": 85.1,
   "date": "2021-08-10",
   "kind": "peel",
   "note": "Ledger fan-out (stylized): the Polygon USDC position inside 0x5dc3…3214."
  },
  {
   "from": "p_usdt_e",
   "to": "tether_frz",
   "amountBTC": 33.4,
   "date": "2021-08-10",
   "kind": "seizure",
   "note": "Tether blacklists the attack address. Ardoino: alerts came in from several directions at once and the multisig freeze was organized inside ~20 minutes. 33,431,197 USDT immobilized before the attacker could move it."
  },
  {
   "from": "p_usdc_e",
   "to": "curve",
   "amountBTC": 96.4,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "USDC pushed into Curve 3pool hours after the USDT freeze — read as insurance against a matching Circle blacklist (Chainalysis)."
  },
  {
   "from": "p_dai",
   "to": "curve",
   "amountBTC": 0.7,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "The looted DAI goes into the same Curve deposit."
  },
  {
   "from": "curve",
   "to": "pos_3crv",
   "amountBTC": 95.3,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "95,269,796 3CRV LP tokens received (Chainalysis)."
  },
  {
   "from": "pos_3crv",
   "to": "dai_out",
   "amountBTC": 96.9,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "3CRV burned for 96,942,061 DAI (Chainalysis) — the stablecoin stack is now freeze-proof."
  },
  {
   "from": "p_usdc_b",
   "to": "ellipsis",
   "amountBTC": 87.6,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "BSC USDC into Ellipsis Finance (Curve fork) — SlowMist: ~$120M of liquidity added."
  },
  {
   "from": "p_busd",
   "to": "ellipsis",
   "amountBTC": 32.1,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "BUSD joins the Ellipsis deposit."
  },
  {
   "from": "ellipsis",
   "to": "pos_eps",
   "amountBTC": 119.5,
   "date": "2021-08-10",
   "kind": "chainhop",
   "note": "The ~$119.7M Ellipsis LP position."
  },
  {
   "from": "pos_eps",
   "to": "stage_bsc",
   "amountBTC": 119.7,
   "date": "2021-08-11",
   "kind": "chainhop",
   "note": "Liquidity withdrawn ahead of the give-back (staging node stylized — on-chain it returned to the attack address)."
  },
  {
   "from": "atk_eth",
   "to": "hanashiro",
   "amountBTC": 0.04,
   "date": "2021-08-10",
   "kind": "cashout",
   "note": "13.37 ETH thank-you tip to hanashiro.eth for the input-data warning 'DONT USE YOUR USDT TOKEN, ITS BLACKLISTED'. The only outbound money that never came back."
  },
  {
   "from": "atk_eth",
   "to": "qa_board",
   "amountBTC": 0.01,
   "date": "2021-08-11",
   "kind": "chainhop",
   "note": "Zero-value tx; input data carries the self-interview: 'WHY HACKING? FOR FUN :)' — and later that day, 'READY TO RETURN THE FUND!' (messages preserved on-chain; Chainalysis reproduced them). Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "atk_eth",
   "to": "qa_board",
   "amountBTC": 0.01,
   "date": "2021-08-12",
   "kind": "chainhop",
   "note": "Further embedded messages negotiate mechanics of the return and propose the joint multisig. Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "atk_eth",
   "to": "qa_board",
   "amountBTC": 0.01,
   "date": "2021-08-16",
   "kind": "chainhop",
   "note": "On the $500k bounty: the attacker says they will not claim it and suggests it go to the technical community (The Register). Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "atk_eth",
   "to": "qa_board",
   "amountBTC": 0.01,
   "date": "2021-08-23",
   "kind": "chainhop",
   "note": "The key handover: the attacker publishes the private key for their multisig share in an on-chain message (CNBC, 23 Aug). Sub-$0.1M; drawn at nominal width."
  },
  {
   "from": "p_usdc_p",
   "to": "ret_pol",
   "amountBTC": 1.0,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "Good-faith opener: ~$1M of Polygon USDC to the recovery address Poly published that morning in its open letter."
  },
  {
   "from": "stage_bsc",
   "to": "ret_bsc",
   "amountBTC": 1.1,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "Good-faith opener on BSC (~$1.1M)."
  },
  {
   "from": "atk_eth",
   "to": "ret_eth",
   "amountBTC": 1.3,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "Good-faith opener on Ethereum (part of ~$2.6M; asset mix stylized)."
  },
  {
   "from": "atk_eth",
   "to": "ret_eth",
   "amountBTC": 1.3,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "Second opener tranche on Ethereum (asset mix stylized)."
  },
  {
   "from": "p_usdc_p",
   "to": "ret_pol",
   "amountBTC": 28.0,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "USDC tranche — the Polygon leg came home first and in full on 11 Aug."
  },
  {
   "from": "p_usdc_p",
   "to": "ret_pol",
   "amountBTC": 28.0,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "USDC tranche (per-tx split stylized)."
  },
  {
   "from": "p_usdc_p",
   "to": "ret_pol",
   "amountBTC": 28.1,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "Final USDC tranche: 85,089,610 USDC restored to Polygon custody."
  },
  {
   "from": "stage_bsc",
   "to": "ret_bsc",
   "amountBTC": 30.0,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "USDC tranche of the Ellipsis withdrawal (per-tx split stylized)."
  },
  {
   "from": "stage_bsc",
   "to": "ret_bsc",
   "amountBTC": 30.0,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "USDC tranche (per-tx split stylized)."
  },
  {
   "from": "stage_bsc",
   "to": "ret_bsc",
   "amountBTC": 26.5,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "Final USDC tranche: 87,603,373 USDC restored."
  },
  {
   "from": "stage_bsc",
   "to": "ret_bsc",
   "amountBTC": 32.1,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "BUSD restored in full."
  },
  {
   "from": "p_btcb",
   "to": "ret_bsc",
   "amountBTC": 23.0,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "BTCB tranche (per-tx split stylized)."
  },
  {
   "from": "p_btcb",
   "to": "ret_bsc",
   "amountBTC": 23.4,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "BTCB tranche completes ≈1,000 BTCB."
  },
  {
   "from": "p_ethb",
   "to": "ret_bsc",
   "amountBTC": 30.0,
   "date": "2021-08-11",
   "kind": "seizure",
   "note": "Pegged-ETH tranche (per-tx split stylized)."
  },
  {
   "from": "p_ethb",
   "to": "ret_bsc",
   "amountBTC": 30.0,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "Pegged-ETH tranche (per-tx split stylized)."
  },
  {
   "from": "p_ethb",
   "to": "ret_bsc",
   "amountBTC": 26.0,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "Final pegged-ETH tranche: 26,629 ETH restored."
  },
  {
   "from": "p_bnb",
   "to": "ret_bsc",
   "amountBTC": 2.6,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "BNB restored — The Block tallied ~$256M returned across chains by 12 Aug, all of BSC and Polygon among it."
  },
  {
   "from": "p_shib",
   "to": "ret_eth",
   "amountBTC": 2.0,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "SHIB restored (259.7B tokens)."
  },
  {
   "from": "p_fei",
   "to": "ret_eth",
   "amountBTC": 0.6,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "FEI restored."
  },
  {
   "from": "p_uni",
   "to": "ret_eth",
   "amountBTC": 1.2,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "UNI restored."
  },
  {
   "from": "p_renbtc",
   "to": "ret_eth",
   "amountBTC": 0.7,
   "date": "2021-08-12",
   "kind": "seizure",
   "note": "renBTC restored."
  },
  {
   "from": "dai_out",
   "to": "multisig",
   "amountBTC": 32.0,
   "date": "2021-08-13",
   "kind": "seizure",
   "note": "DAI tranche into the 3-of-4 multisig jointly controlled with Poly Network (per-tx split stylized)."
  },
  {
   "from": "dai_out",
   "to": "multisig",
   "amountBTC": 32.0,
   "date": "2021-08-13",
   "kind": "seizure",
   "note": "DAI tranche (per-tx split stylized)."
  },
  {
   "from": "dai_out",
   "to": "multisig",
   "amountBTC": 32.9,
   "date": "2021-08-13",
   "kind": "seizure",
   "note": "Final DAI tranche: 96,942,061 DAI in the joint account."
  },
  {
   "from": "p_weth",
   "to": "multisig",
   "amountBTC": 28.0,
   "date": "2021-08-13",
   "kind": "seizure",
   "note": "WETH tranche into the multisig (per-tx split stylized)."
  },
  {
   "from": "p_weth",
   "to": "multisig",
   "amountBTC": 28.0,
   "date": "2021-08-13",
   "kind": "seizure",
   "note": "WETH tranche (per-tx split stylized)."
  },
  {
   "from": "p_weth",
   "to": "multisig",
   "amountBTC": 28.0,
   "date": "2021-08-13",
   "kind": "seizure",
   "note": "Final WETH tranche. Wikipedia: ~$340M returned outright by 13 Aug, with the bulk of the rest parked in this joint account — the attacker keeping one key share as leverage."
  },
  {
   "from": "p_wbtc",
   "to": "multisig",
   "amountBTC": 47.0,
   "date": "2021-08-13",
   "kind": "seizure",
   "note": "1,032 WBTC into the multisig."
  },
  {
   "from": "multisig",
   "to": "ret_eth",
   "amountBTC": 48.0,
   "date": "2021-08-16",
   "kind": "seizure",
   "note": "DAI released from the joint account (date stylized within the 13–19 Aug window)."
  },
  {
   "from": "multisig",
   "to": "ret_eth",
   "amountBTC": 48.9,
   "date": "2021-08-18",
   "kind": "seizure",
   "note": "DAI release completes. Poly's 19 Aug update: ~$427M recovered; 28,953 ETH + 1,032 WBTC (~$141M) still in the multisig awaiting the attacker's key (Merkle Science)."
  },
  {
   "from": "multisig",
   "to": "ret_eth",
   "amountBTC": 92.0,
   "date": "2021-08-23",
   "kind": "seizure",
   "note": "28,953 ETH unlocked after the attacker published their key share on-chain, 23 Aug (CNBC). Poly's 19 Aug count of 28,953 ETH slightly exceeds the 26,109 WETH drained; the composition was not itemized publicly and is drawn as-is."
  },
  {
   "from": "multisig",
   "to": "ret_eth",
   "amountBTC": 49.0,
   "date": "2021-08-23",
   "kind": "seizure",
   "note": "1,032 WBTC unlocked — Poly valued the final multisig tranche at ~$141M. USD values here reflect price movement between 13 and 23 Aug (see disclaimer)."
  },
  {
   "from": "tether_frz",
   "to": "ret_eth",
   "amountBTC": 33.4,
   "date": "2021-08-25",
   "kind": "seizure",
   "note": "The frozen 33,431,197 USDT released. Poly's 23 Aug update said Tether was 'confirming the final unfreezing process'; Wikipedia dates the last of the money 25 Aug — drawn on that date."
  },
  {
   "from": "ret_eth",
   "to": "poly_restored",
   "amountBTC": 278.4,
   "date": "2021-08-25",
   "kind": "seizure",
   "note": "Ethereum-leg custody restored to the protocol (sum of returned tranches at contemporaneous USD)."
  },
  {
   "from": "ret_bsc",
   "to": "poly_restored",
   "amountBTC": 254.7,
   "date": "2021-08-25",
   "kind": "seizure",
   "note": "BSC-leg custody restored to the protocol."
  },
  {
   "from": "ret_pol",
   "to": "poly_restored",
   "amountBTC": 85.1,
   "date": "2021-08-25",
   "kind": "seizure",
   "note": "Polygon-leg custody restored to the protocol."
  },
  {
   "from": "poly_restored",
   "to": "users",
   "amountBTC": 611.0,
   "date": "2021-08-25",
   "kind": "seizure",
   "note": "Full restitution — the ~$611M headline figure, back where it started 15 days earlier. Poly relaunched, and the declined $500,000 bounty became an Immunefi bug-bounty program."
  }
 ],
 "chapters": [
  {
   "id": "ch1",
   "title": "The Keeper Swap",
   "tStart": "2021-08-09",
   "tEnd": "2021-08-10",
   "caption": "On 10 August 2021 the attacker sent a crafted cross-chain message that Poly Network's EthCrossChainManager executed against its own EthCrossChainData contract. A 4-byte function-signature collision let the message overwrite the keeper key that authorizes withdrawals. No private key was stolen. With the keeper replaced, the attacker unlocked about $611M across Ethereum, BSC and Polygon, the largest DeFi theft on record at the time.",
   "focus": [
    "ccd_eth",
    "lp_eth",
    "atk_eth"
   ]
  },
  {
   "id": "ch2",
   "title": "The Freeze and the Tip",
   "tStart": "2021-08-10",
   "tEnd": "2021-08-11",
   "caption": "Tether blacklisted 33,431,197 USDT at the attack address within about 20 minutes of the first alerts. A bystander, hanashiro.eth, warned the attacker in transaction input data not to use the frozen USDT and was tipped 13.37 ETH. The attacker then moved about $97M of USDC and DAI through Curve into DAI, which has no issuer blacklist, and put about $120M of BSC stablecoins into Ellipsis liquidity pools.",
   "focus": [
    "tether_frz",
    "hanashiro",
    "curve"
   ]
  },
  {
   "id": "ch3",
   "title": "The on-chain Q&A",
   "tStart": "2021-08-11",
   "tEnd": "2021-08-11",
   "caption": "On 11 August Poly Network published an open letter with three recovery addresses. The attacker replied with a self-interview written into zero-value transactions ('WHY HACKING? FOR FUN :)') and then 'READY TO RETURN THE FUND!'. The first returns followed.",
   "focus": [
    "qa_board",
    "ret_pol",
    "ret_eth"
   ]
  },
  {
   "id": "ch4",
   "title": "The Give-Back",
   "tStart": "2021-08-12",
   "tEnd": "2021-08-13",
   "caption": "On 12 and 13 August the BSC assets came back in tranches of USDC, BUSD, BTCB, pegged ETH and BNB; about $256M was back by the 12th (The Block). The large Ethereum positions (96.9M DAI, 26,109 WETH, 1,032 WBTC) went instead to a 3-of-4 multisig controlled jointly by the attacker and Poly. About $340M had been returned outright; the rest needed both parties to sign.",
   "focus": [
    "ret_bsc",
    "multisig"
   ]
  },
  {
   "id": "ch5",
   "title": "Mr. White Hat",
   "tStart": "2021-08-13",
   "tEnd": "2021-08-19",
   "caption": "Poly Network began calling the attacker 'Mr. White Hat' and offered a $500,000 bounty and a chief security advisor role. The attacker declined the money and suggested it fund the technical community. Poly's 19 August tally: $427M recovered, with 28,953 ETH and 1,032 WBTC (about $141M) still in the multisig, waiting on the attacker's key.",
   "focus": [
    "multisig",
    "qa_board",
    "ret_eth"
   ]
  },
  {
   "id": "ch6",
   "title": "The Key",
   "tStart": "2021-08-23",
   "tEnd": "2021-08-23",
   "caption": "On 23 August the attacker published the private key to their multisig share in an on-chain message, and Poly retrieved the remaining $141M of ETH and WBTC the same day. The only funds still outstanding were Tether's frozen $33.4M, which the attacker never controlled.",
   "focus": [
    "multisig",
    "qa_board"
   ]
  },
  {
   "id": "ch7",
   "title": "Made Whole",
   "tStart": "2021-08-24",
   "tEnd": "2021-08-25",
   "caption": "Poly's 23 August update said Tether was confirming the final unfreezing of the 33,431,197 USDT, and the last funds were returned by 25 August, fifteen days after the exploit. Users were made whole and the declined bounty became an Immunefi bug-bounty program. No US prosecution followed, so this exhibit is an industry post-mortem, not a court record.",
   "focus": [
    "tether_frz",
    "poly_restored",
    "users"
   ]
  }
 ]
};
