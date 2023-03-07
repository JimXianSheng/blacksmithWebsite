import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {
    return (
        <div>
            <h1>Events Page</h1>
            <div>
                {data.map(ev => (
                    <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                        <Image width={300} height={"300"} alt={ev.title} src={ev.image} />
                        <h2>{ev.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default EventsPage;


export async function getStaticProps() {
    const { events_categories } = await import('/data/companydata.json');
    // this is how to check what is coming in:
    // console.log(events_categories);
    return {
      props: {
        data: events_categories,
      },
    };
  }