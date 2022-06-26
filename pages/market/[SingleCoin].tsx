import React from 'react'
import { useRouter } from 'next/router'
import { Row, Col, Button, Input } from 'antd'
import { Stock } from '@ant-design/plots'
import Layout from '../../containers/layout/Layout'
import TitleBanner from '../../components/title-banner/TitleBanner'
import data from './ChartData'
import {
  useGetCryptosQuery,
  useGetCryptosInfoQuery,
} from '../../services/CryptoApi'

const SingleCoinPage = () => {
  const router = useRouter()
  const { SingleCoin } = router.query
  const { data: coinData } = useGetCryptosInfoQuery(SingleCoin)
  const { data: moreData } = useGetCryptosQuery({})
  // eslint-disable-next-line no-console
  console.log('coinData', coinData)
  const coinId = coinData ? Object.keys(coinData.data)[0] : 1
  const moreCoinInfo =
    coinData && moreData
      ? // eslint-disable-next-line eqeqeq
        moreData.data.filter((coin: any) => coin.id == coinId)
      : null
  // eslint-disable-next-line no-console
  console.log('moreCoinInfo', moreCoinInfo)
  const total = moreCoinInfo && 100 * moreCoinInfo[0].quote.USD.price
  const config = {
    data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
  }

  return (
    <Layout>
      <TitleBanner
        lastTitle={coinData ? coinData.data[coinId].name : 'Loading...'}
      />
      <Row justify="center">
        {coinData ? (
          <>
            <Col xs={18} className="button-list-single-coin">
              <Button size="large" className="button">
                Overview
              </Button>{' '}
              <Button size="large" className="button-outline">
                Market
              </Button>{' '}
              <Button size="large" className="button-outline">
                Historical Data
              </Button>{' '}
              <Button size="large" className="button-outline">
                Holders
              </Button>{' '}
              <Button size="large" className="button-outline">
                Project Info
              </Button>{' '}
              <Button size="large" className="button-outline">
                Wallets
              </Button>{' '}
              <Button size="large" className="button-outline">
                News
              </Button>{' '}
              <Button size="large" className="button-outline">
                Socials
              </Button>{' '}
              <Button size="large" className="button-outline">
                Ratings
              </Button>{' '}
              <Button size="large" className="button-outline">
                Analysis
              </Button>{' '}
              <Button size="large" className="button-outline">
                Price Estimates
              </Button>
            </Col>
            <Col xs={18} className="info-section-single-coin">
              <div className="info-header-single-coin">
                <div className="flex-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`}
                    alt={`${coinData.data[coinId].slug} logo`}
                  />
                  <h4>{coinData.data[coinId].name}</h4>
                  <span>{coinData.data[coinId].symbol}</span>
                </div>
                <div className="price-info-single-coin">
                  <p>
                    $
                    {moreCoinInfo && moreCoinInfo[0].quote.USD.price > 1
                      ? moreCoinInfo[0].quote.USD.price.toFixed(2)
                      : moreCoinInfo[0].quote.USD.price.toFixed(6)}
                  </p>
                  <div
                    className={`${
                      moreCoinInfo[0].quote.USD.percent_change_24h >= 0
                        ? 'positive-background-color'
                        : 'negative-background-color'
                    }`}
                  >
                    {moreCoinInfo[0].quote.USD.percent_change_24h >= 0
                      ? `+${moreCoinInfo[0].quote.USD.percent_change_24h.toFixed(
                          2
                        )}`
                      : moreCoinInfo[0].quote.USD.percent_change_24h.toFixed(2)}
                    %
                  </div>
                </div>
              </div>
              <p>{coinData.data[coinId].description}</p>
            </Col>
            <Col xs={12}>
              <Stock {...config} />
            </Col>
            <Col xs={6} className="detail-single-coin">
              <h4>Trade Calculater</h4>
              <div>
                <div>
                  <p>{coinData.data[coinId].name}:</p>
                  <p>Amount:</p>
                  <p>Price:</p>
                  <p>Total:</p>
                </div>
                <div>
                  <Input
                    defaultValue={`${coinData.data[coinId].symbol} / USDT`}
                    readOnly
                  />
                  <Input defaultValue="100" />
                  <Input
                    defaultValue={
                      moreCoinInfo && moreCoinInfo[0].quote.USD.price > 1
                        ? `$ ${moreCoinInfo[0].quote.USD.price.toFixed(2)}`
                        : `$ ${moreCoinInfo[0].quote.USD.price.toFixed(5)}`
                    }
                  />
                  <Input
                    defaultValue={`$ ${
                      total > 1 ? total.toFixed(2) : total.toFixed(6)
                    }`}
                  />
                </div>
              </div>
              <Button size="large" className="buy-button" block>
                Buy
              </Button>
              <Button size="large" className="sell-button" block>
                Sell
              </Button>
            </Col>
          </>
        ) : (
          'Loading...'
        )}
      </Row>
    </Layout>
  )
}

export default SingleCoinPage
