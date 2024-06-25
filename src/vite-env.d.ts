/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

type FeaturesCardPropsType = {
    title: string;
    text: string;
    image: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }
    >;
};

type FeturesCardContentType = FeaturesCardPropsType[];
