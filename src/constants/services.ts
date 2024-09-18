import { Card } from '@/types/card'

export declare type Service = Card & {
    detail: string
}

export const SERVICES: Card[] = [
    {
        title: 'Cloud Migration',
        description: `Prepare and deliver a cloud migration strategy and roadmap meeting your organisation's unique needs`,
        image: 'cloud_upload',
        page: 'services',
    },
    {
        title: 'Technology Readiness',
        description: 'Assess your current technology to ensure future directions are achievable',
        image: 'check',
        page: 'services',
    },
    {
        title: 'Software Development',
        description: 'Develop custom solutions to your operating requirements or adapt a solution from our existing suite',
        image: 'code',
        page: 'services',
    },
    {
        title: 'Data Architecture',
        description: 'Review and architect custom data structures and databases',
        image: 'database',
        page: 'services',
    },
    {
        title: 'Data Analytics',
        description: 'Perform complex analysis and implement custom models into your existing environment',
        image: 'monitoring',
        page: 'services',
    },
    {
        title: 'Cost Assessment',
        description: 'Perform a cost analysis to ensure optimum efficiency of current or future technology states',
        image: 'attach_money',
        page: 'services',
    },
]
