import {useState} from 'react';
import {useFloating, useInteractions, useDismiss} from '@floating-ui/react';

export function New() {
  const [isOpen, setIsOpen] = useState(false);

  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const dismiss = useDismiss(context);

  const {getReferenceProps, getFloatingProps} = useInteractions([dismiss]);

  return (
    <>
      <a href="https://github.com/floating-ui/floating-ui/pull/3075">
        <h2>https://github.com/floating-ui/floating-ui/pull/3075</h2>
      </a>
      <button
        ref={refs.setReference}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-rose-500 text-white rounded-md"
        {...getReferenceProps()}
      >
        Trigger / Reference element
      </button>

      {isOpen && (
        <div
          ref={refs.setFloating}
          role="tooltip"
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <input />
        </div>
      )}
    </>
  );
}
