import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Define the DropdownMenu component
const DropdownMenu = () => {
  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle function to open/close a dropdown based on the index
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Sample data for dropdown items
  const dropdownItems = [
    {
      title: "Conducting a competition for the selection of audit entities",
      content: "Gualapack Ukraine Goloshennya about the tender 2022 [345 Kb]",
      link: "/path-to-your-file-1"
    },
    {
      title: "Second Competition Announcement",
      content: "Details about the second competition [123 Kb]",
      link: "/path-to-your-file-2"
    },
    {
      title: "Third Competition Announcement",
      content: "Details about the third competition [456 Kb]",
      link: "/path-to-your-file-3"
    },
    {
      title: "Fourth Competition Announcement",
      content: "Details about the fourth competition [789 Kb]",
      link: "/path-to-your-file-4"
    },
    {
      title: "Fourth Competition Announcement",
      content: "Details about the fourth competition [789 Kb]",
      link: "/path-to-your-file-4"
    },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto" }}>
      {/* Map through dropdownItems to render each dropdown */}
      {dropdownItems.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            marginBottom: "50px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Header for each dropdown item; clickable to toggle open/close */}
          <div
            onClick={() => toggleDropdown(index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              padding: "20px",
              fontSize: "20px", // Fixed fontSize unit
              fontWeight: "bold",
            }}
          >
            <span>{item.title}</span>
            {/* Display plus or minus icon based on the dropdown state */}
            <span>
              {openDropdown === index ? (
                <FaMinus style={{ color: "orange" }} />
              ) : (
                <FaPlus style={{ color: "orange" }} />
              )}
            </span>
          </div>
          {/* Conditionally render content based on whether the dropdown is open */}
          {openDropdown === index && (
            <div style={{ padding: "10px 15px", borderTop: "1px solid #ccc", backgroundColor: "#fff" }}>
              <a href={item.link} download style={{ textDecoration: "none", color: "#000" }}>
                {item.content}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Export the DropdownMenu component for use in other parts of the application
export { DropdownMenu };
