export interface PageWrapperProps {
  name?: string;
  meta?:
    | {
        title: string;
        description: string;
        og: {
          title: string;
          description: string;
        };
      }
    | undefined;
}
