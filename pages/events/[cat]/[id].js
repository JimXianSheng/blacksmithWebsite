const EventPage = () => {
    console.log(data);
    return (
        <h1>Single event</h1>
    )
}

export default EventPage;

export async function getStaticPaths() {
    const data = await import('/data/companydata.json');
    const allEvents = data;

    const allPaths = allEvents.map(path => {
        return {
            params: {
                cat: path.city,
                id: path.id
            }
        }
    })

    return {
        paths: [],
        fallback: false,
    };
};

export async function getStaticProps(context) {
    console.log(context);
    const id = context.params.id;
    const { allEvents } = await import('/data/companydata.json');
    const eventData = allEvents.filter(ev => (
         id ===ev.id
    ))

    return (
        props: { data: eventData },
    )
}