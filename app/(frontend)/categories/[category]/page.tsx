import Card from '@/components/Card/Card';
import data from '@/lib/data';

const Category = ({ params }: { params: { category: string } }) => {
  const filteredProducts = data.products.filter((product) => product.category === params.category);

  return (
    <section className="category">
      {filteredProducts.map((product) => (
        <Card key={product.slug} product={product} />
      ))}
    </section>
  );
};

export default Category;

