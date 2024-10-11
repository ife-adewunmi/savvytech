export class RateLimiter {
  private requests: Map<string, number[]>
  private readonly limit: number
  private readonly interval: number

  constructor(limit: number, interval: number) {
    this.requests = new Map()
    this.limit = limit
    this.interval = interval
  }

  check(key: string): boolean {
    const now = Date.now()
    const requestTimestamps = this.requests.get(key) || []

    // Remove old timestamps
    const recentRequests = requestTimestamps.filter((timestamp) => now - timestamp < this.interval)

    if (recentRequests.length >= this.limit) {
      return false
    }

    recentRequests.push(now)
    this.requests.set(key, recentRequests)
    return true
  }
}
