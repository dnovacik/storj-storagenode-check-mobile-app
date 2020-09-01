import { types, Instance } from 'mobx-state-tree'

export interface INode extends Instance<typeof Node> {}
export interface ISatellite extends Instance<typeof Satellite> {}
export interface IDiskSpace extends Instance<typeof DiskSpace> {}
export interface IBandWidth extends Instance<typeof BandWidth> {}

const BandWidth = types.model('BandWidth', {
  available: types.number,
  used: types.number
})

const DiskSpace = types.model('DiskSpace', {
  available: types.number,
  used: types.number,
  trash: types.number
})

const Satellite = types.model('Satellite', {
  id: types.string,
  url: types.string,
  disqualified: types.optional(types.maybeNull(types.Date), null),
  suspended: types.optional(types.maybeNull(types.Date), null)
})

const Node = types.model('Node', {
  nodeID: types.string,
  nodeIP: types.string,
  nodePort: types.string,
  upToDate: types.boolean,
  version: types.string,
  wallet: types.string,
  bandwidth: BandWidth,
  diskSpace: DiskSpace,
  satellites: types.array(Satellite)
})
// .create({
//   id: '',
//   upToDate: false,
//   version: '',
//   wallet: '',
//   bandWidth: BandWidth.create({
//     available: 0,
//     used: 0
//   }),
//   diskSpace: DiskSpace.create({
//     available: 0,
//     used: 0,
//     trash: 0
//   }),
//   satellites: []
// })

export default Node