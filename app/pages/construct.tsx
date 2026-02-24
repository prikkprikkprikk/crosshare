import { ConstructOrUploadPage } from '../components/ConstructOrUploadPage.js';
import { withStaticTranslation } from '../lib/translation.js';

export const getStaticProps = withStaticTranslation(() => {
  return { props: {} };
});

export default function ConstructorPage() {
  return <ConstructOrUploadPage key="constructor" isUpload={false} />;
}
