import React from 'react';
import {Page, ContentBlock, Navbar} from 'framework7-react';

export const About = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <ContentBlock inner>
                <p>Here is About page!</p>
                <p>You can go <f7-link back>back</f7-link>.</p>
                <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
                <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi.       Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
            </ContentBlock>
        </Page>
    );
};
