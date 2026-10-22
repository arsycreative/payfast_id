// src/lib/rate-limit.js

const requests = new Map();

/**
 * Basic in-memory rate limiter per IP or identifier.
 * @param {string} key Identifier (e.g., client IP)
 * @param {number} limit Maximum allowed requests in window
 * @param {number} windowMs Time window in milliseconds
 * @returns {{ success: boolean, remaining: number, reset: number }}
 */
export function checkRateLimit(key, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const record = requests.get(key) || { count: 0, resetTime: now + windowMs };

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
    requests.set(key, record);
    return { success: true, remaining: limit - 1, reset: record.resetTime };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.resetTime };
  }

  record.count += 1;
  requests.set(key, record);
  return { success: true, remaining: limit - record.count, reset: record.resetTime };
}
