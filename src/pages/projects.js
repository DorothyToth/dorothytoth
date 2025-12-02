import { useRouter } from 'next/router'

import getAllProjects from '@/utils/get-all-projects';
import ProjectListing from '@/components/project-listing';

export default function Projects({ projects }) {

    const router = useRouter()
    
    const filters = {};
    Object.keys( router.query ).forEach( key => {
        filters[ key ] = router.query[ key ].split( ',' );
    })

    return (
        <>
            <ProjectListing projects={ projects } filters={ filters } />
        </>
    );
}

export async function getStaticProps() {

    const projects = await getAllProjects();

    return {
        props: {
            projects,
        },
    }
}