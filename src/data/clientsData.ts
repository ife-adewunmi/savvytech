export interface BaseClient {
  title: string
  description?: string
}

export interface Client extends BaseClient {
  clients: Array<string>
}

export interface TrustedClient extends BaseClient {
  clients: Array<ClientDetails>
}

export interface ClientDetails {
  name: string
  width?: number
  height?: number
}

export const trustedByData: TrustedClient = {
  title: 'Trusted in the industry by',
  clients: [
    {
      name: 'julius_berger',
      width: 0,
      height: 0,
    },
    {
      name: 'british_petroleum',
      width: 0,
      height: 0,
    },
    {
      name: 'chevron',
      width: 0,
      height: 0,
    },
    {
      name: 'mobil',
      width: 0,
      height: 0,
    },
    {
      name: 'lafarge',
      width: 0,
      height: 0,
    },
    {
      name: 'shell',
      width: 0,
      height: 0,
    },
    {
      name: 'total_energies',
      width: 0,
      height: 0,
    },
  ],
}

export const clientsData: Client = {
  title: 'Our Clients',
  description: 'We have large client base, which includes companies such as:',
  clients: ['1', '2', '3', '4', '5', '6', 'one', 'two', 'one', 'two', 'one', 'two', 'one', 'two'],
}
