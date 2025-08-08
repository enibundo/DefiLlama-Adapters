const { sumTokens2 } = require('../helper/unwrapLPs')

const config = {
    ethereum: '0x4933A85b5b5466Fbaf179F72D3DE273c287EC2c2'
}

Object.keys(config).forEach(chain => {
    const asset = config[chain]
    module.exports[chain] = {
      tvl: async (api) => {
        const supply = await api.call({
          abi: 'erc20:totalSupply',
          target: asset,
        })
  
        api.add(asset, supply)
        return sumTokens2({ api })
      }
    }
  })