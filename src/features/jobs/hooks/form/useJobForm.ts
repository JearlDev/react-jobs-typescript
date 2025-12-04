import { useState } from "react";
import type { Job } from "../../types/job";

export function useJobForm(job?: Job) {
  const [title, setTitle] = useState(job?.title || "");
  const [type, setType] = useState(job?.type || "Full-Time");
  const [description, setDescription] = useState(job?.description || "");
  const [salary, setSalary] = useState(job?.salary || "Under $50K");
  const [location, setLocation] = useState(job?.location || "");
  const [companyName, setCompanyName] = useState(job?.company.name || "");
  const [companyDescription, setCompanyDescription] = useState<
    string | undefined
  >(job?.company.description || "");
  const [contactEmail, setContactEmail] = useState(
    job?.company.contactEmail || ""
  );
  const [contactPhone, setContactPhone] = useState<string | undefined>(
    job?.company.contactPhone || ""
  );

  return {
    title,
    setTitle,
    type,
    setType,
    description,
    setDescription,
    salary,
    setSalary,
    location,
    setLocation,
    companyName,
    setCompanyName,
    companyDescription,
    setCompanyDescription,
    contactEmail,
    setContactEmail,
    contactPhone,
    setContactPhone,
  };
}
