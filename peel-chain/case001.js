window.CASE_DATA = {
 "meta": {
  "title": "Laundering trail of the 2016 Bitfinex hack",
  "caseNo": "001",
  "disclaimer": "Demonstrative reconstruction, not evidence. The headline facts (the 2 August 2016 breach of 119,754 BTC, Wallet 1CGA4s, the services used, the fictitious-identity exchange accounts, gold coins and gift cards, the 1 February 2022 seizure of about 94,636 BTC, the 2023 guilty pleas and the 2024 sentences) come from the cited public record in United States v. Lichtenstein and Morgan (D.D.C.). All intermediate wallet addresses are invented. Hop counts, per-hop amounts and dates inside the documented windows are stylised to illustrate the techniques the DOJ described. Exchanges are unnamed (VCE 1, VCE 2 and so on), as in the criminal complaint. Post-arrest forfeiture amounts are stylised; the real recovery of about $10B spanned many asset types.",
  "sources": [
   {
    "name": "DOJ press release, Feb 8 2022: Two Arrested for Alleged Conspiracy to Launder $4.5 Billion in Stolen Cryptocurrency",
    "url": "https://www.justice.gov/archives/opa/pr/two-arrested-alleged-conspiracy-launder-45-billion-stolen-cryptocurrency"
   },
   {
    "name": "DOJ press release, Aug 3 2023: Bitfinex Hacker and Wife Plead Guilty to Money Laundering Conspiracy",
    "url": "https://www.justice.gov/archives/opa/pr/bitfinex-hacker-and-wife-plead-guilty-money-laundering-conspiracy-involving-billions"
   },
   {
    "name": "DOJ press release, Nov 14 2024: Bitfinex Hacker Sentenced",
    "url": "https://www.justice.gov/archives/opa/pr/bitfinex-hacker-sentenced-money-laundering-conspiracy-involving-billions-stolen"
   },
   {
    "name": "TRM Labs: Lichtenstein and Morgan Sentenced in the Bitfinex Case",
    "url": "https://www.trmlabs.com/resources/blog/ilya-lichtenstein-sentenced-for-role-in-bitfinex-hack-in-razzlekhan-case-as-government-recovers-about-10-billion-in-stolen-funds"
   },
   {
    "name": "Wikipedia: 2016 Bitfinex hack",
    "url": "https://en.wikipedia.org/wiki/2016_Bitfinex_hack"
   },
   {
    "name": "CNBC, Nov 14 2024: Bitfinex hacker sentenced to five years",
    "url": "https://www.cnbc.com/2024/11/14/bitfinex-hacker-sentenced-to-five-years-in-prison-for-bitcoin-money-laundering-scheme.html"
   },
   {
    "name": "The Hacker News, Nov 2024: gift cards redeemed via Walmart app (citing Chainalysis)",
    "url": "https://thehackernews.com/2024/11/bitfinex-hacker-sentenced-to-5-years.html"
   }
  ]
 },
 "entities": [
  {
   "id": "bitfinex",
   "label": "Bitfinex",
   "shortAddr": "—",
   "type": "exchange",
   "cluster": "victim",
   "note": "Hong Kong-based virtual currency exchange. On Aug 2, 2016 a hacker breached its systems and initiated ~2,000 unauthorized transactions despite BitGo multi-signature security (DOJ, Feb 8 2022)."
  },
  {
   "id": "w_1cga4s",
   "label": "Wallet 1CGA4s",
   "shortAddr": "1CGA4s…",
   "type": "hacker_wallet",
   "cluster": "lichtenstein",
   "note": "The primary theft wallet named in the criminal complaint. Received 119,754 BTC from ~2,000 unauthorized Bitfinex transactions. About 94,636 BTC never left before the Feb 2022 seizure."
  },
  {
   "id": "st_01",
   "label": "Staging wallet S-1",
   "shortAddr": "1myEKzHe…",
   "type": "intermediary",
   "cluster": "lichtenstein",
   "note": "Hacker-controlled staging wallet. Part of the Jan–Feb 2017 movement of ~25,000 BTC out of Wallet 1CGA4s in small, complex transactions (TRM Labs). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "st_02",
   "label": "Staging wallet S-2",
   "shortAddr": "1zhLRAQL…",
   "type": "intermediary",
   "cluster": "lichtenstein",
   "note": "Hacker-controlled staging wallet, funded Feb 2017. Fed the 2017 peel chains into exchanges. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "st_03",
   "label": "Staging wallet S-3",
   "shortAddr": "1qWEYSo2…",
   "type": "intermediary",
   "cluster": "lichtenstein",
   "note": "Hacker-controlled staging wallet, funded Feb 2017 then dormant — movement paused almost entirely April 2017–April 2019 (TRM Labs). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "st_04",
   "label": "Staging wallet S-4",
   "shortAddr": "1B2kWKAG…",
   "type": "intermediary",
   "cluster": "lichtenstein",
   "note": "Hacker-controlled staging wallet, funded Feb 2017; drawn down from 2020. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pa_01",
   "label": "Peel hop A-1",
   "shortAddr": "1feWpbuJ…",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Hop in a 2017 peel chain feeding structured deposits into AlphaBay accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pa_02",
   "label": "Peel hop A-2",
   "shortAddr": "121FFE5Y…",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Hop in a 2017 peel chain feeding structured deposits into AlphaBay accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pa_03",
   "label": "Peel hop A-3",
   "shortAddr": "14m2oGQ1…",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Hop in a 2017 peel chain feeding structured deposits into AlphaBay accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pa_04",
   "label": "Peel hop A-4",
   "shortAddr": "1ZBPjeQw…",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Hop in a 2017 peel chain feeding structured deposits into AlphaBay accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pa_05",
   "label": "Peel hop A-5",
   "shortAddr": "1Rvmz7T1…",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Hop in a 2017 peel chain feeding structured deposits into AlphaBay accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pa_06",
   "label": "Peel hop A-6",
   "shortAddr": "1HSGtHui…",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Hop in a 2017 peel chain feeding structured deposits into AlphaBay accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pa_07",
   "label": "Peel hop A-7",
   "shortAddr": "1JF9BHRM…",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Hop in a 2017 peel chain feeding structured deposits into AlphaBay accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pa_08",
   "label": "Peel hop A-8",
   "shortAddr": "1wm98x58…",
   "type": "intermediary",
   "cluster": "peel_chain_a",
   "note": "Hop in a 2017 peel chain feeding structured deposits into AlphaBay accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_01",
   "label": "Peel hop B-1",
   "shortAddr": "1u99SGuA…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_02",
   "label": "Peel hop B-2",
   "shortAddr": "1JGWhFc9…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_03",
   "label": "Peel hop B-3",
   "shortAddr": "1ePa2zQ5…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_04",
   "label": "Peel hop B-4",
   "shortAddr": "1VbtUsYY…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_05",
   "label": "Peel hop B-5",
   "shortAddr": "1o24yMgg…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_06",
   "label": "Peel hop B-6",
   "shortAddr": "1ugCV9BA…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_07",
   "label": "Peel hop B-7",
   "shortAddr": "1sNN6zfK…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_08",
   "label": "Peel hop B-8",
   "shortAddr": "1V7TcD5J…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_09",
   "label": "Peel hop B-9",
   "shortAddr": "1CCyC1Kg…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pb_10",
   "label": "Peel hop B-10",
   "shortAddr": "1RUN2qzX…",
   "type": "intermediary",
   "cluster": "peel_chain_b",
   "note": "Hop in a 2017 peel chain feeding deposits into exchange accounts opened under fictitious identities, and into the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pc_01",
   "label": "Peel hop C-1",
   "shortAddr": "1NDUB53k…",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Hop in the 2019–2020 peel chain feeding Bitcoin Fog and exchange deposits after the two-year pause. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pc_02",
   "label": "Peel hop C-2",
   "shortAddr": "1rW5DAbQ…",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Hop in the 2019–2020 peel chain feeding Bitcoin Fog and exchange deposits after the two-year pause. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pc_03",
   "label": "Peel hop C-3",
   "shortAddr": "1GB8wJT5…",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Hop in the 2019–2020 peel chain feeding Bitcoin Fog and exchange deposits after the two-year pause. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pc_04",
   "label": "Peel hop C-4",
   "shortAddr": "1ay8xmWV…",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Hop in the 2019–2020 peel chain feeding Bitcoin Fog and exchange deposits after the two-year pause. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pc_05",
   "label": "Peel hop C-5",
   "shortAddr": "1oTBdK4a…",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Hop in the 2019–2020 peel chain feeding Bitcoin Fog and exchange deposits after the two-year pause. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pc_06",
   "label": "Peel hop C-6",
   "shortAddr": "15Q5LR1U…",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Hop in the 2019–2020 peel chain feeding Bitcoin Fog and exchange deposits after the two-year pause. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pc_07",
   "label": "Peel hop C-7",
   "shortAddr": "18n76ULK…",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Hop in the 2019–2020 peel chain feeding Bitcoin Fog and exchange deposits after the two-year pause. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pc_08",
   "label": "Peel hop C-8",
   "shortAddr": "13NA5Qck…",
   "type": "intermediary",
   "cluster": "peel_chain_c",
   "note": "Hop in the 2019–2020 peel chain feeding Bitcoin Fog and exchange deposits after the two-year pause. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pd_01",
   "label": "Peel hop D-1",
   "shortAddr": "1QJ86BHf…",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Hop in the 2020–2021 peel chain: ChipMixer, Hydra, coinjoins, and exchange deposits. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pd_02",
   "label": "Peel hop D-2",
   "shortAddr": "158wJoU8…",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Hop in the 2020–2021 peel chain: ChipMixer, Hydra, coinjoins, and exchange deposits. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pd_03",
   "label": "Peel hop D-3",
   "shortAddr": "1hy3FED6…",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Hop in the 2020–2021 peel chain: ChipMixer, Hydra, coinjoins, and exchange deposits. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pd_04",
   "label": "Peel hop D-4",
   "shortAddr": "1pSBcVgP…",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Hop in the 2020–2021 peel chain: ChipMixer, Hydra, coinjoins, and exchange deposits. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pd_05",
   "label": "Peel hop D-5",
   "shortAddr": "1Q9Fpuqk…",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Hop in the 2020–2021 peel chain: ChipMixer, Hydra, coinjoins, and exchange deposits. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pd_06",
   "label": "Peel hop D-6",
   "shortAddr": "1L2dgAmM…",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Hop in the 2020–2021 peel chain: ChipMixer, Hydra, coinjoins, and exchange deposits. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pd_07",
   "label": "Peel hop D-7",
   "shortAddr": "1ELNKcjF…",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Hop in the 2020–2021 peel chain: ChipMixer, Hydra, coinjoins, and exchange deposits. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "pd_08",
   "label": "Peel hop D-8",
   "shortAddr": "1SA4Fa5R…",
   "type": "intermediary",
   "cluster": "peel_chain_d",
   "note": "Hop in the 2020–2021 peel chain: ChipMixer, Hydra, coinjoins, and exchange deposits. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "alphabay",
   "label": "AlphaBay",
   "shortAddr": "—",
   "type": "darknet",
   "cluster": "services",
   "note": "Then the largest darknet market. Used as a mixer in early 2017: deposit stolen BTC, withdraw to fresh wallets. Its July 2017 law-enforcement seizure yielded internal records that re-linked deposits to withdrawals."
  },
  {
   "id": "hydra",
   "label": "Hydra Market",
   "shortAddr": "—",
   "type": "darknet",
   "cluster": "services",
   "note": "Russian-language darknet market. Funds were rerouted here after AlphaBay's closure (Wikipedia; DOJ describes darknet market deposits)."
  },
  {
   "id": "helix",
   "label": "Helix",
   "shortAddr": "—",
   "type": "mixer",
   "cluster": "services",
   "note": "Bitcoin mixing service operated by Larry Harmon (shut down late 2017). Named by the DOJ as one of the mixers used to launder the Bitfinex funds."
  },
  {
   "id": "bitcoinfog",
   "label": "Bitcoin Fog",
   "shortAddr": "—",
   "type": "mixer",
   "cluster": "services",
   "note": "Longest-running bitcoin mixer, operated by Roman Sterlingov. DOJ named it among the mixing services used; TRM reports up to 10 Bitcoin Fog deposits."
  },
  {
   "id": "chipmixer",
   "label": "ChipMixer",
   "shortAddr": "—",
   "type": "mixer",
   "cluster": "services",
   "note": "Mixing service named by the DOJ among those used to launder the stolen funds (itself taken down in 2023)."
  },
  {
   "id": "wasabi",
   "label": "Coinjoin (Wasabi)",
   "shortAddr": "—",
   "type": "mixer",
   "cluster": "services",
   "note": "Coinjoin transactions via Wasabi-style wallets; TRM reports large sums moved through coinjoins and intermediary wallets around April 2021."
  },
  {
   "id": "ab_w1",
   "label": "AlphaBay withdrawal wallet 1",
   "shortAddr": "1b4AL3n9…",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Fresh wallet receiving structured AlphaBay withdrawals — the 'break' in the public trail that AlphaBay's seized ledger later repaired. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "ab_w2",
   "label": "AlphaBay withdrawal wallet 2",
   "shortAddr": "1i6fJw2A…",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Fresh wallet receiving structured AlphaBay withdrawals — the 'break' in the public trail that AlphaBay's seized ledger later repaired. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "ab_w3",
   "label": "AlphaBay withdrawal wallet 3",
   "shortAddr": "1ehxxnEA…",
   "type": "intermediary",
   "cluster": "post_alphabay",
   "note": "Fresh wallet receiving structured AlphaBay withdrawals — the 'break' in the public trail that AlphaBay's seized ledger later repaired. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "hx_o1",
   "label": "Helix output wallet",
   "shortAddr": "1PqAqj5R…",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Wallet receiving mixed coins withdrawn from Helix. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "bf_o1",
   "label": "Bitcoin Fog output wallet 1",
   "shortAddr": "1WMXHKcS…",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Wallet receiving mixed coins withdrawn from Bitcoin Fog. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "bf_o2",
   "label": "Bitcoin Fog output wallet 2",
   "shortAddr": "1UomJ1op…",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Wallet receiving mixed coins withdrawn from Bitcoin Fog; part re-mixed through ChipMixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "cm_o1",
   "label": "ChipMixer output wallet",
   "shortAddr": "1APiDDqh…",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Wallet receiving 'chips' withdrawn from ChipMixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "ws_o1",
   "label": "Coinjoin output wallet",
   "shortAddr": "11fRc3vw…",
   "type": "intermediary",
   "cluster": "post_mixer",
   "note": "Wallet receiving coinjoined outputs. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "id": "xmr_bridge",
   "label": "Monero conversion",
   "shortAddr": "XMR —",
   "type": "intermediary",
   "cluster": "chainhop",
   "note": "Conversion point where BTC was chain-hopped into Monero and other anonymity-enhanced cryptocurrency (AEC), as alleged by the DOJ. On-chain trail ends here."
  },
  {
   "id": "vce1",
   "label": "VCE 1 account",
   "shortAddr": "acct ••••",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Virtual currency exchange, unnamed in the criminal complaint (referred to as 'VCE'). Accounts opened under fictitious identities using falsified documents (DOJ)."
  },
  {
   "id": "vce2",
   "label": "VCE 2 account",
   "shortAddr": "acct ••••",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Virtual currency exchange, unnamed in the criminal complaint (referred to as 'VCE'). Accounts opened under fictitious identities using falsified documents (DOJ)."
  },
  {
   "id": "vce3",
   "label": "VCE 3 account",
   "shortAddr": "acct ••••",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Virtual currency exchange, unnamed in the criminal complaint (referred to as 'VCE'). Accounts opened under fictitious identities using falsified documents (DOJ)."
  },
  {
   "id": "vce4",
   "label": "VCE 4 account",
   "shortAddr": "acct ••••",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Virtual currency exchange, unnamed in the criminal complaint (referred to as 'VCE'). Accounts opened under fictitious identities using falsified documents (DOJ)."
  },
  {
   "id": "vce5",
   "label": "VCE 5 account",
   "shortAddr": "acct ••••",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Virtual currency exchange, unnamed in the criminal complaint (referred to as 'VCE'). Accounts opened under fictitious identities using falsified documents (DOJ)."
  },
  {
   "id": "vce6",
   "label": "VCE 6 account",
   "shortAddr": "acct ••••",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Virtual currency exchange, unnamed in the criminal complaint (referred to as 'VCE'). Accounts opened under fictitious identities using falsified documents (DOJ)."
  },
  {
   "id": "p2p",
   "label": "P2P platform account",
   "shortAddr": "acct ••••",
   "type": "exchange",
   "cluster": "exchanges",
   "note": "Peer-to-peer trading platform of the LocalBitcoins type (TRM Labs); used alongside U.S.-based exchange accounts."
  },
  {
   "id": "gold_coins",
   "label": "Gold coins",
   "shortAddr": "—",
   "type": "cashout",
   "cluster": "cashout",
   "note": "A portion of the stolen funds was exchanged for gold coins, which Morgan concealed by burying them (DOJ). Law enforcement later recovered buried gold."
  },
  {
   "id": "walmart_gc",
   "label": "Walmart gift cards",
   "shortAddr": "—",
   "type": "cashout",
   "cluster": "cashout",
   "note": "Gift cards bought with stolen funds; per Chainalysis reporting, redeemed through the Walmart iPhone app under an account in Morgan's own name — a key identification break."
  },
  {
   "id": "bank_biz",
   "label": "U.S. business bank accounts",
   "shortAddr": "—",
   "type": "cashout",
   "cluster": "cashout",
   "note": "U.S.-based business accounts used to 'legitimize' banking activity (DOJ press release, Feb 8 2022)."
  },
  {
   "id": "cash_couriers",
   "label": "RU/UA cash middlemen",
   "shortAddr": "—",
   "type": "cashout",
   "cluster": "cashout",
   "note": "Crypto exchanged for cash through Russian and Ukrainian middlemen; cash moved to and from U.S.-based accounts (TRM Labs / sentencing coverage)."
  },
  {
   "id": "usg_seizure",
   "label": "U.S. Government seizure wallet",
   "shortAddr": "bc1q…USG",
   "type": "seizure",
   "cluster": "usg",
   "note": "Government-controlled wallet. On Feb 1, 2022 agents moved ~94,636 BTC (~$3.6B) here after decrypting Lichtenstein's cloud-storage file of ~2,000 addresses and private keys — the largest financial seizure in DOJ history."
  },
  {
   "id": "post_arrest",
   "label": "Post-arrest forfeiture",
   "shortAddr": "—",
   "type": "seizure",
   "cluster": "usg",
   "note": "Additional assets recovered after the Feb 2022 arrests and Aug 2023 guilty pleas; the government reports roughly $10B recovered in total (BTC, ETH, stablecoins, gold, cash)."
  }
 ],
 "edges": [
  {
   "from": "bitfinex",
   "to": "w_1cga4s",
   "amountBTC": 24100,
   "date": "2016-08-02",
   "kind": "hack",
   "note": "Tranche 1 of 6 — aggregate of the ~2,000 unauthorized transactions that moved 119,754 BTC to Wallet 1CGA4s on Aug 2, 2016 (DOJ). Tranche split is illustrative."
  },
  {
   "from": "bitfinex",
   "to": "w_1cga4s",
   "amountBTC": 21460,
   "date": "2016-08-02",
   "kind": "hack",
   "note": "Tranche 2 of 6 — aggregate of the ~2,000 unauthorized transactions that moved 119,754 BTC to Wallet 1CGA4s on Aug 2, 2016 (DOJ). Tranche split is illustrative."
  },
  {
   "from": "bitfinex",
   "to": "w_1cga4s",
   "amountBTC": 20874,
   "date": "2016-08-02",
   "kind": "hack",
   "note": "Tranche 3 of 6 — aggregate of the ~2,000 unauthorized transactions that moved 119,754 BTC to Wallet 1CGA4s on Aug 2, 2016 (DOJ). Tranche split is illustrative."
  },
  {
   "from": "bitfinex",
   "to": "w_1cga4s",
   "amountBTC": 19320,
   "date": "2016-08-02",
   "kind": "hack",
   "note": "Tranche 4 of 6 — aggregate of the ~2,000 unauthorized transactions that moved 119,754 BTC to Wallet 1CGA4s on Aug 2, 2016 (DOJ). Tranche split is illustrative."
  },
  {
   "from": "bitfinex",
   "to": "w_1cga4s",
   "amountBTC": 17800,
   "date": "2016-08-02",
   "kind": "hack",
   "note": "Tranche 5 of 6 — aggregate of the ~2,000 unauthorized transactions that moved 119,754 BTC to Wallet 1CGA4s on Aug 2, 2016 (DOJ). Tranche split is illustrative."
  },
  {
   "from": "bitfinex",
   "to": "w_1cga4s",
   "amountBTC": 16200,
   "date": "2016-08-02",
   "kind": "hack",
   "note": "Tranche 6 of 6 — aggregate of the ~2,000 unauthorized transactions that moved 119,754 BTC to Wallet 1CGA4s on Aug 2, 2016 (DOJ). Tranche split is illustrative."
  },
  {
   "from": "w_1cga4s",
   "to": "st_01",
   "amountBTC": 4631,
   "date": "2017-01-25",
   "kind": "peel",
   "note": "Part of the ~25,000 BTC first moved out of Wallet 1CGA4s in Jan–Feb 2017 in small, complex transactions (TRM Labs). Split across staging wallets is stylized."
  },
  {
   "from": "w_1cga4s",
   "to": "st_02",
   "amountBTC": 4287,
   "date": "2017-02-10",
   "kind": "peel",
   "note": "Part of the ~25,000 BTC first moved out of Wallet 1CGA4s in Jan–Feb 2017 in small, complex transactions (TRM Labs). Split across staging wallets is stylized."
  },
  {
   "from": "w_1cga4s",
   "to": "st_03",
   "amountBTC": 8750,
   "date": "2017-02-18",
   "kind": "peel",
   "note": "Part of the ~25,000 BTC first moved out of Wallet 1CGA4s in Jan–Feb 2017 in small, complex transactions (TRM Labs). Split across staging wallets is stylized."
  },
  {
   "from": "w_1cga4s",
   "to": "st_04",
   "amountBTC": 7450,
   "date": "2017-02-24",
   "kind": "peel",
   "note": "Part of the ~25,000 BTC first moved out of Wallet 1CGA4s in Jan–Feb 2017 in small, complex transactions (TRM Labs). Split across staging wallets is stylized."
  },
  {
   "from": "st_01",
   "to": "pa_01",
   "amountBTC": 4631,
   "date": "2017-01-27",
   "kind": "peel",
   "note": "Start of peel chain A toward AlphaBay. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_01",
   "to": "alphabay",
   "amountBTC": 496,
   "date": "2017-01-29",
   "kind": "deposit",
   "note": "Structured deposit into an AlphaBay account — using the darknet market as a mixer (DOJ; TIME). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_01",
   "to": "pa_02",
   "amountBTC": 4135,
   "date": "2017-01-30",
   "kind": "peel",
   "note": "Peel chain continues: bulk moves on, a slice peels off at each hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_02",
   "to": "alphabay",
   "amountBTC": 512,
   "date": "2017-02-04",
   "kind": "deposit",
   "note": "Structured deposit into an AlphaBay account — using the darknet market as a mixer (DOJ; TIME). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_02",
   "to": "pa_03",
   "amountBTC": 3623,
   "date": "2017-02-05",
   "kind": "peel",
   "note": "Peel chain continues: bulk moves on, a slice peels off at each hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_03",
   "to": "alphabay",
   "amountBTC": 388,
   "date": "2017-02-11",
   "kind": "deposit",
   "note": "Structured deposit into an AlphaBay account — using the darknet market as a mixer (DOJ; TIME). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_03",
   "to": "pa_04",
   "amountBTC": 3235,
   "date": "2017-02-12",
   "kind": "peel",
   "note": "Peel chain continues: bulk moves on, a slice peels off at each hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_04",
   "to": "alphabay",
   "amountBTC": 545,
   "date": "2017-02-19",
   "kind": "deposit",
   "note": "Structured deposit into an AlphaBay account — using the darknet market as a mixer (DOJ; TIME). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_04",
   "to": "pa_05",
   "amountBTC": 2690,
   "date": "2017-02-20",
   "kind": "peel",
   "note": "Peel chain continues: bulk moves on, a slice peels off at each hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_05",
   "to": "alphabay",
   "amountBTC": 430,
   "date": "2017-03-02",
   "kind": "deposit",
   "note": "Structured deposit into an AlphaBay account — using the darknet market as a mixer (DOJ; TIME). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_05",
   "to": "pa_06",
   "amountBTC": 2260,
   "date": "2017-03-03",
   "kind": "peel",
   "note": "Peel chain continues: bulk moves on, a slice peels off at each hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_06",
   "to": "alphabay",
   "amountBTC": 505,
   "date": "2017-03-15",
   "kind": "deposit",
   "note": "Structured deposit into an AlphaBay account — using the darknet market as a mixer (DOJ; TIME). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_06",
   "to": "pa_07",
   "amountBTC": 1755,
   "date": "2017-03-16",
   "kind": "peel",
   "note": "Peel chain continues: bulk moves on, a slice peels off at each hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_07",
   "to": "alphabay",
   "amountBTC": 462,
   "date": "2017-03-28",
   "kind": "deposit",
   "note": "Structured deposit into an AlphaBay account — using the darknet market as a mixer (DOJ; TIME). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_07",
   "to": "pa_08",
   "amountBTC": 1293,
   "date": "2017-03-29",
   "kind": "peel",
   "note": "Peel chain continues: bulk moves on, a slice peels off at each hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_08",
   "to": "alphabay",
   "amountBTC": 470,
   "date": "2017-04-06",
   "kind": "deposit",
   "note": "Structured deposit into an AlphaBay account — using the darknet market as a mixer (DOJ; TIME). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pa_08",
   "to": "st_02",
   "amountBTC": 823,
   "date": "2017-04-09",
   "kind": "peel",
   "note": "Chain A residual consolidated back into staging. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "alphabay",
   "to": "ab_w1",
   "amountBTC": 1010,
   "date": "2017-02-20",
   "kind": "peel",
   "note": "AlphaBay withdrawal to a fresh wallet — deposit-then-withdraw to break the trail (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "alphabay",
   "to": "ab_w1",
   "amountBTC": 720,
   "date": "2017-02-26",
   "kind": "peel",
   "note": "Second structured AlphaBay withdrawal. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "alphabay",
   "to": "ab_w2",
   "amountBTC": 900,
   "date": "2017-03-10",
   "kind": "peel",
   "note": "AlphaBay withdrawal to a fresh wallet. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "alphabay",
   "to": "ab_w3",
   "amountBTC": 1050,
   "date": "2017-04-12",
   "kind": "peel",
   "note": "AlphaBay withdrawal to a fresh wallet, weeks before the market's July 2017 seizure. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "ab_w1",
   "to": "vce1",
   "amountBTC": 620,
   "date": "2017-03-01",
   "kind": "deposit",
   "note": "Deposit into VCE 1 account opened under a fictitious identity (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "ab_w1",
   "to": "xmr_bridge",
   "amountBTC": 340,
   "date": "2017-03-05",
   "kind": "chainhop",
   "note": "Chain-hop: BTC converted to Monero (AEC), as alleged by the DOJ. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "ab_w2",
   "to": "vce2",
   "amountBTC": 575,
   "date": "2017-03-18",
   "kind": "deposit",
   "note": "Deposit into VCE 2 account under a fictitious identity. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "ab_w2",
   "to": "xmr_bridge",
   "amountBTC": 300,
   "date": "2017-03-22",
   "kind": "chainhop",
   "note": "Chain-hop into anonymity-enhanced cryptocurrency. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "ab_w3",
   "to": "vce1",
   "amountBTC": 400,
   "date": "2017-04-18",
   "kind": "deposit",
   "note": "Deposit into VCE 1. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "ab_w3",
   "to": "vce2",
   "amountBTC": 340,
   "date": "2017-04-22",
   "kind": "deposit",
   "note": "Deposit into VCE 2. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "ab_w3",
   "to": "xmr_bridge",
   "amountBTC": 280,
   "date": "2017-04-25",
   "kind": "chainhop",
   "note": "Chain-hop into Monero. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "st_02",
   "to": "pb_01",
   "amountBTC": 5110,
   "date": "2017-02-14",
   "kind": "peel",
   "note": "Start of peel chain B into exchange accounts and the Helix mixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_01",
   "to": "vce1",
   "amountBTC": 315,
   "date": "2017-02-20",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account opened under a fictitious identity (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_01",
   "to": "pb_02",
   "amountBTC": 4795,
   "date": "2017-02-22",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_02",
   "to": "helix",
   "amountBTC": 410,
   "date": "2017-03-06",
   "kind": "deposit",
   "note": "Deposit into the Helix mixer, one of the mixing services named by the DOJ. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_02",
   "to": "pb_03",
   "amountBTC": 4385,
   "date": "2017-03-08",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_03",
   "to": "vce2",
   "amountBTC": 288,
   "date": "2017-03-20",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account opened under a fictitious identity (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_03",
   "to": "pb_04",
   "amountBTC": 4097,
   "date": "2017-03-22",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_04",
   "to": "vce1",
   "amountBTC": 350,
   "date": "2017-04-03",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account opened under a fictitious identity (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_04",
   "to": "pb_05",
   "amountBTC": 3747,
   "date": "2017-04-05",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_05",
   "to": "helix",
   "amountBTC": 395,
   "date": "2017-05-15",
   "kind": "deposit",
   "note": "Deposit into the Helix mixer, one of the mixing services named by the DOJ. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_05",
   "to": "pb_06",
   "amountBTC": 3352,
   "date": "2017-05-18",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_06",
   "to": "vce2",
   "amountBTC": 264,
   "date": "2017-06-10",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account opened under a fictitious identity (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_06",
   "to": "pb_07",
   "amountBTC": 3088,
   "date": "2017-06-12",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_07",
   "to": "vce1",
   "amountBTC": 305,
   "date": "2017-07-08",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account opened under a fictitious identity (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_07",
   "to": "pb_08",
   "amountBTC": 2783,
   "date": "2017-07-11",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_08",
   "to": "helix",
   "amountBTC": 372,
   "date": "2017-08-20",
   "kind": "deposit",
   "note": "Deposit into the Helix mixer, one of the mixing services named by the DOJ. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_08",
   "to": "pb_09",
   "amountBTC": 2411,
   "date": "2017-08-23",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_09",
   "to": "vce2",
   "amountBTC": 296,
   "date": "2017-10-02",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account opened under a fictitious identity (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_09",
   "to": "pb_10",
   "amountBTC": 2115,
   "date": "2017-10-05",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_10",
   "to": "vce1",
   "amountBTC": 340,
   "date": "2017-11-14",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account opened under a fictitious identity (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "helix",
   "to": "hx_o1",
   "amountBTC": 1050,
   "date": "2017-11-20",
   "kind": "peel",
   "note": "Withdrawal of mixed coins from Helix. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "hx_o1",
   "to": "vce2",
   "amountBTC": 430,
   "date": "2017-12-04",
   "kind": "deposit",
   "note": "Mixed coins deposited into VCE 2. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "hx_o1",
   "to": "vce3",
   "amountBTC": 380,
   "date": "2017-12-15",
   "kind": "deposit",
   "note": "Mixed coins deposited into VCE 3. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "vce2",
   "to": "xmr_bridge",
   "amountBTC": 150,
   "date": "2017-06-25",
   "kind": "chainhop",
   "note": "Exchange-side chain-hop into anonymity-enhanced cryptocurrency (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "st_03",
   "to": "pc_01",
   "amountBTC": 6000,
   "date": "2019-04-20",
   "kind": "peel",
   "note": "Movement resumes after the April 2017–April 2019 pause (TRM Labs). Start of peel chain C. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pb_10",
   "to": "pc_01",
   "amountBTC": 1775,
   "date": "2019-05-02",
   "kind": "peel",
   "note": "Dormant chain-B residual reactivated after two years and merged into chain C. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_01",
   "to": "bitcoinfog",
   "amountBTC": 520,
   "date": "2019-05-10",
   "kind": "deposit",
   "note": "Deposit into Bitcoin Fog — TRM reports up to 10 Bitcoin Fog deposits; the DOJ named it among the mixers used. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_01",
   "to": "pc_02",
   "amountBTC": 7255,
   "date": "2019-05-13",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_02",
   "to": "vce3",
   "amountBTC": 310,
   "date": "2019-06-02",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account under a fictitious identity. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_02",
   "to": "pc_03",
   "amountBTC": 6945,
   "date": "2019-06-05",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_03",
   "to": "bitcoinfog",
   "amountBTC": 610,
   "date": "2019-07-14",
   "kind": "deposit",
   "note": "Deposit into Bitcoin Fog — TRM reports up to 10 Bitcoin Fog deposits; the DOJ named it among the mixers used. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_03",
   "to": "pc_04",
   "amountBTC": 6335,
   "date": "2019-07-17",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_04",
   "to": "vce4",
   "amountBTC": 295,
   "date": "2019-09-01",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account under a fictitious identity. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_04",
   "to": "pc_05",
   "amountBTC": 6040,
   "date": "2019-09-04",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_05",
   "to": "bitcoinfog",
   "amountBTC": 480,
   "date": "2019-11-05",
   "kind": "deposit",
   "note": "Deposit into Bitcoin Fog — TRM reports up to 10 Bitcoin Fog deposits; the DOJ named it among the mixers used. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_05",
   "to": "pc_06",
   "amountBTC": 5560,
   "date": "2019-11-08",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_06",
   "to": "vce3",
   "amountBTC": 335,
   "date": "2020-01-20",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account under a fictitious identity. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_06",
   "to": "pc_07",
   "amountBTC": 5225,
   "date": "2020-01-23",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_07",
   "to": "bitcoinfog",
   "amountBTC": 555,
   "date": "2020-03-12",
   "kind": "deposit",
   "note": "Deposit into Bitcoin Fog — TRM reports up to 10 Bitcoin Fog deposits; the DOJ named it among the mixers used. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_07",
   "to": "pc_08",
   "amountBTC": 4670,
   "date": "2020-03-15",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_08",
   "to": "vce4",
   "amountBTC": 290,
   "date": "2020-05-06",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account under a fictitious identity. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "bitcoinfog",
   "to": "bf_o1",
   "amountBTC": 890,
   "date": "2020-02-10",
   "kind": "peel",
   "note": "Withdrawal of mixed coins from Bitcoin Fog. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "bitcoinfog",
   "to": "bf_o2",
   "amountBTC": 760,
   "date": "2020-06-01",
   "kind": "peel",
   "note": "Withdrawal of mixed coins from Bitcoin Fog. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "bf_o1",
   "to": "vce3",
   "amountBTC": 410,
   "date": "2020-02-25",
   "kind": "deposit",
   "note": "Mixed coins into VCE 3. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "bf_o1",
   "to": "vce5",
   "amountBTC": 350,
   "date": "2020-04-08",
   "kind": "deposit",
   "note": "Mixed coins into VCE 5. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "bf_o2",
   "to": "vce4",
   "amountBTC": 330,
   "date": "2020-07-15",
   "kind": "deposit",
   "note": "Mixed coins into VCE 4. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "bf_o2",
   "to": "chipmixer",
   "amountBTC": 400,
   "date": "2020-09-03",
   "kind": "deposit",
   "note": "Re-mixed: Bitcoin Fog output pushed through ChipMixer. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "vce4",
   "to": "xmr_bridge",
   "amountBTC": 120,
   "date": "2020-12-10",
   "kind": "chainhop",
   "note": "Exchange-side chain-hop into anonymity-enhanced cryptocurrency. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "st_04",
   "to": "pd_01",
   "amountBTC": 4400,
   "date": "2020-05-24",
   "kind": "peel",
   "note": "Start of peel chain D. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pc_08",
   "to": "pd_01",
   "amountBTC": 4380,
   "date": "2020-06-15",
   "kind": "peel",
   "note": "Chain-C residual merged into chain D. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_01",
   "to": "chipmixer",
   "amountBTC": 640,
   "date": "2020-07-08",
   "kind": "deposit",
   "note": "Deposit into ChipMixer, named by the DOJ among the mixing services used. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_01",
   "to": "pd_02",
   "amountBTC": 8140,
   "date": "2020-07-11",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_02",
   "to": "hydra",
   "amountBTC": 720,
   "date": "2020-08-19",
   "kind": "deposit",
   "note": "Deposit into Hydra Market, where funds were rerouted after AlphaBay's closure (Wikipedia; DOJ describes darknet-market deposits). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_02",
   "to": "pd_03",
   "amountBTC": 7420,
   "date": "2020-08-22",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_03",
   "to": "vce5",
   "amountBTC": 385,
   "date": "2020-10-05",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account under a fictitious identity. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_03",
   "to": "pd_04",
   "amountBTC": 7035,
   "date": "2020-10-08",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_04",
   "to": "wasabi",
   "amountBTC": 1100,
   "date": "2021-04-14",
   "kind": "deposit",
   "note": "Coinjoin batch — TRM reports large sums moved through coinjoins and intermediary wallets around April 2021. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_04",
   "to": "pd_05",
   "amountBTC": 5935,
   "date": "2021-04-17",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_05",
   "to": "hydra",
   "amountBTC": 830,
   "date": "2021-06-09",
   "kind": "deposit",
   "note": "Deposit into Hydra Market, where funds were rerouted after AlphaBay's closure (Wikipedia; DOJ describes darknet-market deposits). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_05",
   "to": "pd_06",
   "amountBTC": 5105,
   "date": "2021-06-12",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_06",
   "to": "vce6",
   "amountBTC": 410,
   "date": "2021-08-02",
   "kind": "deposit",
   "note": "Peel-off deposit into an exchange account under a fictitious identity. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_06",
   "to": "pd_07",
   "amountBTC": 4695,
   "date": "2021-08-05",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_07",
   "to": "chipmixer",
   "amountBTC": 590,
   "date": "2021-09-21",
   "kind": "deposit",
   "note": "Deposit into ChipMixer, named by the DOJ among the mixing services used. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_07",
   "to": "pd_08",
   "amountBTC": 4105,
   "date": "2021-09-24",
   "kind": "peel",
   "note": "Peel chain continues to the next hop. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "pd_08",
   "to": "p2p",
   "amountBTC": 365,
   "date": "2021-11-10",
   "kind": "deposit",
   "note": "Deposit at a peer-to-peer platform of the LocalBitcoins type (TRM Labs). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "chipmixer",
   "to": "cm_o1",
   "amountBTC": 950,
   "date": "2021-10-12",
   "kind": "peel",
   "note": "Withdrawal of ChipMixer 'chips'. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "cm_o1",
   "to": "vce6",
   "amountBTC": 420,
   "date": "2021-10-25",
   "kind": "deposit",
   "note": "Mixed coins into VCE 6. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "cm_o1",
   "to": "cash_couriers",
   "amountBTC": 380,
   "date": "2021-11-18",
   "kind": "cashout",
   "note": "Exchanged for cash through Russian/Ukrainian middlemen (TRM Labs). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "wasabi",
   "to": "ws_o1",
   "amountBTC": 1020,
   "date": "2021-05-02",
   "kind": "peel",
   "note": "Coinjoined outputs withdrawn to a fresh wallet. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "ws_o1",
   "to": "vce5",
   "amountBTC": 460,
   "date": "2021-05-20",
   "kind": "deposit",
   "note": "Coinjoined coins into VCE 5. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "ws_o1",
   "to": "p2p",
   "amountBTC": 350,
   "date": "2021-06-30",
   "kind": "deposit",
   "note": "Coinjoined coins sold via P2P platform. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "hydra",
   "to": "cash_couriers",
   "amountBTC": 600,
   "date": "2021-07-20",
   "kind": "cashout",
   "note": "Value withdrawn from Hydra as cash via Russian-language cash-out channels. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "vce1",
   "to": "bank_biz",
   "amountBTC": 240,
   "date": "2019-06-15",
   "kind": "cashout",
   "note": "Fiat withdrawal to U.S. business bank accounts used to 'legitimize' banking activity (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "vce4",
   "to": "bank_biz",
   "amountBTC": 180,
   "date": "2021-03-09",
   "kind": "cashout",
   "note": "Fiat withdrawal to U.S. business accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "p2p",
   "to": "bank_biz",
   "amountBTC": 90,
   "date": "2021-12-08",
   "kind": "cashout",
   "note": "P2P sale proceeds into U.S. accounts. Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "vce2",
   "to": "gold_coins",
   "amountBTC": 95,
   "date": "2021-05-10",
   "kind": "cashout",
   "note": "Stolen funds exchanged for gold coins, which Morgan concealed by burying them (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "vce5",
   "to": "gold_coins",
   "amountBTC": 60,
   "date": "2021-09-14",
   "kind": "cashout",
   "note": "Further conversion to gold coins (DOJ). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "vce3",
   "to": "walmart_gc",
   "amountBTC": 12,
   "date": "2020-11-02",
   "kind": "cashout",
   "note": "Walmart gift cards bought with stolen funds; redeemed via the Walmart iPhone app under an account in Morgan's name (per Chainalysis). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "vce3",
   "to": "walmart_gc",
   "amountBTC": 8,
   "date": "2021-01-19",
   "kind": "cashout",
   "note": "Further gift-card purchases (per Chainalysis reporting). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "vce6",
   "to": "cash_couriers",
   "amountBTC": 210,
   "date": "2021-11-30",
   "kind": "cashout",
   "note": "Crypto-for-cash through Russian/Ukrainian middlemen (TRM Labs). Stylized address and amount; illustrates a technique described in the DOJ filings."
  },
  {
   "from": "w_1cga4s",
   "to": "usg_seizure",
   "amountBTC": 94636,
   "date": "2022-02-01",
   "kind": "seizure",
   "note": "Jan 31, 2022: agents decrypted a file in Lichtenstein's cloud-storage account containing ~2,000 addresses and their private keys. Feb 1: ~94,636 BTC (~$3.6B) moved to a government wallet — the largest financial seizure in DOJ history. Arrests followed in Manhattan on Feb 8."
  },
  {
   "from": "st_03",
   "to": "post_arrest",
   "amountBTC": 2750,
   "date": "2023-08-03",
   "kind": "seizure",
   "note": "Residual staged funds forfeited following the Aug 3, 2023 guilty pleas. Amount stylized; the government reports ~$10B recovered in total."
  },
  {
   "from": "st_04",
   "to": "post_arrest",
   "amountBTC": 3050,
   "date": "2023-08-03",
   "kind": "seizure",
   "note": "Residual staged funds forfeited under the plea agreements. Amount stylized."
  },
  {
   "from": "pd_08",
   "to": "post_arrest",
   "amountBTC": 3740,
   "date": "2024-11-14",
   "kind": "seizure",
   "note": "Remaining chain-D funds recovered by the time of sentencing (Lichtenstein: 5 years, Nov 14 2024; Morgan: 18 months, Nov 18 2024). Amount stylized."
  }
 ],
 "chapters": [
  {
   "id": "ch1_breach",
   "title": "I. The Breach",
   "tStart": "2016-08-02",
   "tEnd": "2016-08-31",
   "caption": "On 2 August 2016 an attacker breached Bitfinex and made about 2,000 unauthorized transactions, moving 119,754 BTC, then worth about $71 million, into a single outside wallet. The criminal complaint calls it Wallet 1CGA4s. At his 2023 plea, Ilya Lichtenstein admitted he was the hacker.",
   "focus": [
    "bitfinex",
    "w_1cga4s"
   ]
  },
  {
   "id": "ch2_dormant",
   "title": "II. The Dormant Months",
   "tStart": "2016-08-03",
   "tEnd": "2017-01-24",
   "caption": "For nearly five months the stolen coins barely moved. From January 2017 about 25,000 BTC was split off into staging wallets in small, complex transactions. The remaining ~94,600 BTC stayed in the 1CGA4s cluster until the government seized it in 2022.",
   "focus": [
    "w_1cga4s",
    "st_01",
    "st_02",
    "st_03",
    "st_04"
   ]
  },
  {
   "id": "ch3_alphabay",
   "title": "III. AlphaBay, the Darknet Mixer",
   "tStart": "2017-01-25",
   "tEnd": "2017-07-20",
   "caption": "From January 2017, funds were peeled into accounts at AlphaBay, then the largest darknet market, and withdrawn to fresh wallets to break the public trail. After AlphaBay was taken down in July 2017, later flows went to Hydra instead. Some withdrawals were chain-hopped into Monero.",
   "focus": [
    "st_01",
    "pa_01",
    "pa_04",
    "pa_08",
    "alphabay",
    "ab_w1",
    "ab_w2",
    "ab_w3",
    "xmr_bridge"
   ]
  },
  {
   "id": "ch4_peel",
   "title": "IV. Peel Chains and Fictitious Names",
   "tStart": "2017-02-01",
   "tEnd": "2019-04-15",
   "caption": "Long chains of wallets peeled small amounts at each hop into exchange accounts opened under fictitious identities with falsified documents (the complaint calls them VCE 1, VCE 2 and so on) and into the Helix mixer. From April 2017 to April 2019, movement almost stopped.",
   "focus": [
    "st_02",
    "pb_01",
    "pb_05",
    "pb_10",
    "vce1",
    "vce2",
    "helix",
    "hx_o1"
   ]
  },
  {
   "id": "ch5_mixers",
   "title": "V. Mixers and Chain-Hopping",
   "tStart": "2019-04-16",
   "tEnd": "2021-12-31",
   "caption": "When movement resumed in 2019, deposits went through Bitcoin Fog and ChipMixer, both named by the DOJ, and through Hydra, a Russian-language darknet market. Around April 2021, large sums moved through coinjoin transactions and many intermediary wallets.",
   "focus": [
    "st_03",
    "pc_01",
    "bitcoinfog",
    "bf_o1",
    "st_04",
    "pd_01",
    "chipmixer",
    "hydra",
    "wasabi",
    "vce4"
   ]
  },
  {
   "id": "ch6_cashout",
   "title": "VI. Gold, Gift Cards, and Green",
   "tStart": "2019-06-01",
   "tEnd": "2021-12-31",
   "caption": "The last step was spendable money: withdrawals into U.S. business bank accounts to make the banking look legitimate, gold coins that Morgan bought and buried, Walmart gift cards redeemed through the Walmart iPhone app under an account in Morgan's name (per Chainalysis), and cash through Russian and Ukrainian middlemen.",
   "focus": [
    "vce2",
    "vce3",
    "vce5",
    "vce6",
    "p2p",
    "gold_coins",
    "walmart_gc",
    "bank_biz",
    "cash_couriers"
   ]
  },
  {
   "id": "ch7_seizure",
   "title": "VII. The Cloud Key",
   "tStart": "2022-01-31",
   "tEnd": "2022-02-08",
   "caption": "On 31 January 2022 agents decrypted a file in Lichtenstein's cloud storage holding about 2,000 addresses and their private keys. On 1 February they moved about 94,636 BTC, then worth $3.6 billion, into a government wallet, the largest financial seizure in DOJ history. Lichtenstein and Morgan were arrested in Manhattan on 8 February.",
   "focus": [
    "w_1cga4s",
    "usg_seizure"
   ]
  },
  {
   "id": "ch8_judgment",
   "title": "VIII. United States v. Lichtenstein and Morgan",
   "tStart": "2023-08-03",
   "tEnd": "2024-11-18",
   "caption": "On 3 August 2023 both defendants pleaded guilty to money laundering conspiracy, and Lichtenstein admitted he had carried out the 2016 hack. In November 2024 he was sentenced to five years in prison and Morgan to 18 months. The government reports recovering roughly $10 billion in assets tied to the case.",
   "focus": [
    "usg_seizure",
    "post_arrest",
    "st_03",
    "st_04",
    "pd_08"
   ]
  }
 ]
};
