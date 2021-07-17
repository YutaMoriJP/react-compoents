import { useState, useCallback } from "react";

const useOpen = (initial = false) => {
  const [open, setOpen] = useState(initial);
  const toggle = useCallback(() => setOpen(prev => !prev), []);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  return { open, toggle, onOpen, onClose };
};

export default useOpen;
