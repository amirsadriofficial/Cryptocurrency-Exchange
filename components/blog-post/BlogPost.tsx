import { Row, Col, Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import BlogPostFooter from './BlogPostFooter'

type BlogPostProps = {
  id: string
  title: string
  image: StaticImageData
}

const BlogPost = ({ id, title, image }: BlogPostProps) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`./blog/${id}`}>
      <Row align="middle" className="blog-post">
        <h3>{title}</h3>
        <Image src={image} alt="Blog Image" />
        <p className="blog-post-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum ...
        </p>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Button size="large" className="button" block>
            Read More
          </Button>
        </Col>
        <BlogPostFooter />
      </Row>
    </Link>
  )
}

export default BlogPost
