// Minimal Keccak-256 (the Ethereum variant, pre-NIST padding), used only to derive
// event topic hashes from their Solidity signatures. Port of the Keccak team's
// "readable and compact" reference. Slow (BigInt) but it hashes a handful of strings.

const M = (1n << 64n) - 1n;
const rol = (v, n) => (n % 64 === 0 ? v : ((v << BigInt(n % 64)) | (v >> BigInt(64 - (n % 64)))) & M);

function f1600(L) {
  let R = 1;
  for (let round = 0; round < 24; round++) {
    const C = [0, 1, 2, 3, 4].map((x) => L[x][0] ^ L[x][1] ^ L[x][2] ^ L[x][3] ^ L[x][4]);
    const D = [0, 1, 2, 3, 4].map((x) => C[(x + 4) % 5] ^ rol(C[(x + 1) % 5], 1));
    for (let x = 0; x < 5; x++) for (let y = 0; y < 5; y++) L[x][y] ^= D[x];
    let x = 1, y = 0, cur = L[x][y];
    for (let t = 0; t < 24; t++) {
      [x, y] = [y, (2 * x + 3 * y) % 5];
      const tmp = L[x][y];
      L[x][y] = rol(cur, ((t + 1) * (t + 2)) / 2);
      cur = tmp;
    }
    for (let yy = 0; yy < 5; yy++) {
      const T = [0, 1, 2, 3, 4].map((xx) => L[xx][yy]);
      for (let xx = 0; xx < 5; xx++) L[xx][yy] = T[xx] ^ (~T[(xx + 1) % 5] & M & T[(xx + 2) % 5]);
    }
    for (let j = 0; j < 7; j++) {
      R = ((R << 1) ^ ((R >> 7) * 0x71)) % 256;
      if (R & 2) L[0][0] ^= 1n << BigInt((1 << j) - 1);
    }
  }
}

export function keccak256(str) {
  const input = new TextEncoder().encode(str);
  const rate = 136;
  const padded = new Uint8Array(Math.ceil((input.length + 1) / rate) * rate);
  padded.set(input);
  padded[input.length] ^= 0x01;
  padded[padded.length - 1] ^= 0x80;
  const L = Array.from({ length: 5 }, () => new Array(5).fill(0n));
  for (let off = 0; off < padded.length; off += rate) {
    for (let i = 0; i < rate / 8; i++) {
      let lane = 0n;
      for (let b = 7; b >= 0; b--) lane = (lane << 8n) | BigInt(padded[off + i * 8 + b]);
      L[i % 5][Math.floor(i / 5)] ^= lane;
    }
    f1600(L);
  }
  let hex = "";
  for (let i = 0; i < 4; i++) {
    let lane = L[i % 5][Math.floor(i / 5)];
    for (let b = 0; b < 8; b++) { hex += Number(lane & 0xffn).toString(16).padStart(2, "0"); lane >>= 8n; }
  }
  return "0x" + hex;
}
