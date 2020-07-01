import { Alert, Button } from 'reactstrap';

import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div>
        <Alert color='primary'>Hello Project is strapi-next with Bootstrap</Alert>
        &nbsp; <Button color='primary'>Hello from nextjs</Button>
      </div>
    </Layout>
  );
};

export default Index;
