import React from 'react'
import { RingProgress } from '@ant-design/plots'

const RingProgressComponent = () => {
  const config1 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.2,
    color: ['#f3ba2f', '#fff'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#fff',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Trade',
      },
    },
  }
  const config2 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.4,
    color: ['#f3ba2f', '#fff'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Trade',
      },
    },
  }
  const config3 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.9,
    color: ['#f3ba2f', '#fff'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Trade',
      },
    },
  }
  const config4 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#f3ba2f', '#fff'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Trade',
      },
    },
  }
  const config5 = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#f3ba2f', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Trade',
      },
    },
  }
  return (
    <div className="flex-row">
      <RingProgress {...config} />
      <RingProgress {...config2} />
      <RingProgress {...config3} />
      <RingProgress {...config4} />
      <RingProgress {...config5} />
    </div>
  )
}

export default RingProgressComponent