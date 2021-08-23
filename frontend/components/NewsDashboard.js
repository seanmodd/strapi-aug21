import Link from 'next/link';
import { VStack, HStack } from '@chakra-ui/react';
import { MyHStack } from '../styles/styles';
import styles from '@/styles/NewsDashboard.module.css';

export default function NewsDashboard({ news, handleDelete }) {
  return (
    <MyHStack>
      <h4>
        <Link href={`/news/${news.slug}`}>
          <a>{news.name}</a>
        </Link>
      </h4>
      <HStack>
        <Link href={`/news/edit/${news.id}`}>
          <button className="btn-edit">Edit News</button>
        </Link>
        <button className="btn-delete" onClick={() => handleDelete(news.id)}>
          Delete News
        </button>
      </HStack>
    </MyHStack>
  );
}
