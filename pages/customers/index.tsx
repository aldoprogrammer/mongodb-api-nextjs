import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

type Customer = {
    id: number,
    name: string,
    industry: string
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            customers: [
                {
                    id: 1,
                    name: 'John SMith',
                    industry: 'Restaurant',
                },
                {
                    id: 2,
                    name: 'Sal Brown',
                    industry: 'Tech',
                },
            ] as Customer[],
        }
    }
}

const Customers: NextPage = ({
    customers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(customers)
    return (
    <>
    <h1>Customers</h1>
        {customers.map((customer: Customer) => {
            return (
                <div>
                    <p>{customer.id}</p>
                    <p>{customer.name}</p>
                    <p>{customer.industry}</p>
                </div>
            )
        })}
    
    </>
    )
}

export default Customers;