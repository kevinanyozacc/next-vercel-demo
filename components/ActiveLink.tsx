import React from 'react';
import { FC } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props {
    text: String;
    href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
        );
};



