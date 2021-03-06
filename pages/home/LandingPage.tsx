import Image from 'next/image'
import { Row, Col, Form, Input, Button } from 'antd'
import Landing from '../../assets/root/landing.png'

type InfoItemProps = {
  title: string
  description: string
}

const InfoItem = ({ title, description }: InfoItemProps) => {
  return (
    <Col xs={12} sm={12} md={12} lg={6} xl={5}>
      <p className="landing-info-item-title">{title}</p>
      <p className="landing-info-item-description">{description}</p>
    </Col>
  )
}

const LandingPage = () => {
  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo)
  }

  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={12}
        className="get-started-landing"
      >
        <h2>
          Buy, trade, and hold 600+ cryptocurrencies on <span>Binance</span>
        </h2>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          layout="inline"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email-phone"
            rules={[
              {
                required: true,
                message: 'Please input your email or phone number!',
              },
            ]}
            className="landing-input"
          >
            <Input
              placeholder="Email / Phone number"
              size="large"
              className="input"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="button"
            >
              Get Started
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Image src={Landing} alt="started img" />
      </Col>
      <Col xs={24}>
        <Row className="info-item-section">
          <InfoItem
            title="$76 billion"
            description="24h trading volume on Binance exchange"
          />
          <InfoItem title="600+" description="Cryptocurrencies listed" />
          <InfoItem
            title="90 million"
            description="Registered users who trust Binance"
          />
          <InfoItem title="<0.10%" description="Lowest transaction fees" />
        </Row>
      </Col>
    </Row>
  )
}

export default LandingPage
