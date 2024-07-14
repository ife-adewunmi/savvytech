
import React from 'react'
import { Project } from "@/data/projectsData";
import Image from "@/components/Image";

interface OurProductProps {
    products: Array<Project>
}

const OurProduct = ({ products }: OurProductProps) => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-12">Our Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between
                          transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                        </div>
                        <div className="mt-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                READ MORE →
                            </a>
                            <Image
                                src={product.logo || ''}
                                alt={`${product.title} logo`}
                                className="mt-4 h-12 object-contain float-end"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurProduct;