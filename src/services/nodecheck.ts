import axios from 'axios'
import { StorageNode } from './../models/http'

export const getNode = async (host: string, port: string) => {
  return await axios.get<StorageNode>(`http://${host}:${port}/api/sno`)
}