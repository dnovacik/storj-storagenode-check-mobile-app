export interface Satellite {
  id: string
  url: string
  disqualified: Date | null
  suspended: Date | null
}

export interface DiskSpace {
  used: number
  available: number
  trash: number
}

export interface BandWidth {
  used: number
  available: number
}

export interface StorageNode {
  nodeID: string
  wallet: string
  satellites: Array<Satellite>
  diskSpace: DiskSpace
  bandwidth: BandWidth
  lastPinged: Date
  version: string
  upToDate: boolean
  startedAt: Date
}