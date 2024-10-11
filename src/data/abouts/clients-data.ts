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
  clients: [
    'Addax Petroleum Development Co.',
    'Gilmor Engineering Nigeria Limited',
    'Lafarge Cement Wapco Nigeria Limited',
    'PW Construction',
    'Shell Petroleum Development Company of Nigeria',
    'Chevron Nigeria Limited',
    'Lambic Technical & General Services Limited',
    'Aveon Offshore Limited',
    'C & I Leasing PLC',
    'HITECH Construction Co. Ltd',
    'Mobil Producing Nigeria Unlimited',
    'Setraco Nigeria Limited',
    'West African Machinery & Services Ltd.',
    'Eleme Petrochemical',
    'Obanjana Cement (Dangote Group of Companies)',
    'British Oil & Gas Exploration Limited',
    'Niger Delta Power Holding Company',
    'Dantata & Sawoe Construction Company Nig. Ltd.',
    'Intels Nigeria Limited',
    'NLNG',
    'Oiltest Group of Companies',
    'I.T.B Nigeria Limited',
  ],
}
