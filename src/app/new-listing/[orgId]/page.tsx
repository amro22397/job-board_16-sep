'use server'

import { getUser } from '@workos-inc/authkit-nextjs';
import { WorkOS } from '@workos-inc/node';
import '@radix-ui/themes/styles.css';
import "react-country-state-city/dist/react-country-state-city.css";
import JobForm from '@/app/components/JobForm';
  

type PageProps = {
    params: {
        orgId: string;
    }
}
const page = async (props: PageProps) => {

    


    const { user } = await getUser();
    const workos = new WorkOS(process.env.WORKOS_API_KEY);

    if (!user) return 'Please log in'

    const orgId = props.params.orgId;
    const oms = await workos.userManagement.listOrganizationMemberships({
        userId: user.id,
        organizationId: orgId
    })

    const hasAccess = oms.data.length > 0;

    if (!hasAccess) {
        return 'no access'
    }
    
  return (
    <JobForm editJobDoc={null} orgId={orgId} />
  )
}

export default page
