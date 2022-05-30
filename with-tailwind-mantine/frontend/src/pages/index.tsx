import { Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { openSpotlight, useSpotlight } from '@mantine/spotlight';
import { Prism } from '@mantine/prism';
import { useState } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import RichTextEditor from '../components/forms/RichTextEditor';

const deleted = { color: 'red', label: '-' };
const added = { color: 'green', label: '+' };

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
const demo = () => {
  return <Button>Hello 2.0!</Button>
}
`;

const Home: NextPageWithLayout = () => {
    const modals = useModals();
    const spotlight = useSpotlight();
    const [text, setText] = useState('<p>Default Text</p>');

    const openConfirmModal = () =>
        modals.openConfirmModal({
            title: 'Please confirm your action',
            children: (
                <Text size="sm">
                    This action is so important that you are required to confirm it with a modal. Please click one of
                    these buttons to proceed.
                </Text>
            ),
            labels: { confirm: 'Confirm', cancel: 'Cancel' },
            onCancel: () => console.info('Cancel'),
            onConfirm: () => console.info('Confirmed'),
        });

    return (
        <div className="text-lg container mx-auto">
            <section className="flex flex-col space-y-4">
                <Button onClick={openSpotlight}>Open Spotlight or SHIFT + S</Button>
                <Button
                    onClick={() =>
                        spotlight.registerActions([
                            {
                                id: 'custom-action-1',
                                title: 'New Action',
                                description: 'This action was added via the button on the index page',
                                onTrigger: () => console.info('New Action'),
                            },
                        ])
                    }
                >
                    Add another Spotlight Action
                </Button>
                <Button onClick={openConfirmModal}>Open Confirm Modal</Button>
                <Button
                    onClick={() =>
                        showNotification({
                            title: 'Default notification',
                            message: 'Hey there, your code is awesome! 🤥',
                        })
                    }
                >
                    Show notification
                </Button>
                <p className="text-center">
                    View more components{' '}
                    <a href="https://mantine.dev/getting-started/" target="_blank" rel="noreferrer">
                        here
                    </a>
                    .
                </p>
                <Prism
                    language="tsx"
                    withLineNumbers
                    highlightLines={{
                        3: deleted,
                        4: deleted,
                        5: deleted,
                        6: added,
                        7: added,
                        8: added,
                    }}
                >
                    {code}
                </Prism>
                <RichTextEditor value={text} onChange={setText} />
            </section>
        </div>
    );
};

Home.getLayout = function getLayout(page: JSX.Element) {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
