import { types } from 'mobx-state-tree'
import { persist } from 'mst-persist'
import { AsyncStorage } from 'react-native'
import Node from './node'
import { StorageNode } from './../models/http'
import { getNode } from './../services/nodecheck'

interface IStorageNode extends StorageNode {
  nodeIP: string
  nodePort: string
}

const RootStore = types.model('RootStore', {
  nodes: types.array(Node)
})
  .actions((self) => ({
    addNode(node: IStorageNode) {
      self.nodes.push(node)
    },
    removeNode(nodeID: string) {
      const nodeToRemove = self.nodes.find(node => node.nodeID === nodeID)

      if (nodeToRemove) {
        self.nodes.remove(nodeToRemove)
      }
    }
  }))
  .actions((self) => ({
    getNode(host: string, port: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        getNode(host, port)
        .then((response) => {
          if (response.data) {
            self.addNode({
              nodeIP: host,
              nodePort: port,
              ...response.data
            })

            resolve(true)
          }
        })
        .catch((err) => {
          console.log(err)

          reject(false)
        })
      })
    }
  }))
  .create({
    nodes: []
  })

export default RootStore