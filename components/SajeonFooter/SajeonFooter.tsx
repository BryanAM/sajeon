import SajeonAuthButtons from "../SajeonAuthButtons/SajeonAuthButtons";

function SajeonFooter() {
  return (
    <footer className="absolute inset-x-0 bottom-0 bg-muted p-6">
      <div className="m-auto max-w-5xl text-muted-foreground">
        <h2 className="pb-3 text-xl">❀ Sajeon</h2>
        <div className="flex justify-between">
          <p>© 2022 Sajeon - All Rights Reserved</p>
          <SajeonAuthButtons className="hover:underline focus:underline" />
        </div>
      </div>
    </footer>
  );
}

export default SajeonFooter;
