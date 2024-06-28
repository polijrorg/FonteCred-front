import React from 'react';
import ExpandableListItem from 'components/RuleItem';
import * as S from './styles';

const data = [
    {
        id: '1',
        title: '1?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit. Nullam sem arcu, fringilla eget ullamcorper sed, sodales non quam. Ut ornare felis non dignissim elementum. Quisque pulvinar,'
    },
    {
        id: '2',
        title: '2?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit.'
    },
    {
        id: '3',
        title: '3?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit.'
    },
    {
        id: '4',
        title: '4?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit.'
    },
    {
        id: '5',
        title: '5?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit.'
    },
    {
        id: '6',
        title: '6?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit.'
    },
    {
        id: '7',
        title: '7?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit.'
    },
    {
        id: '8',
        title: '8?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit.'
    },
    {
        id: '9',
        title: '9?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit.'
    },
    {
        id: '10',
        title: '10?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis magna eu eleifend hendrerit.'
    }
];

const ExpandableList: React.FC = () => {
    return (
        <S.ListWrapper>
            {data.map((item) => (
                <ExpandableListItem
                    key={item.id}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </S.ListWrapper>
    );
};

export default ExpandableList;
