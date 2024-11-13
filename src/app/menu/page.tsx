"use client";
import React, { useState } from "react";
import { menuItems } from "@/app/menu/data/menu-data";
import MenuCard from "@/app/menu/components/MenuCard";
import Modal from "@/app/menu/components/Modal";
import { MenuItem } from "@/app/menu/types";

export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onViewMore={() => setSelectedItem(item)}
          />
        ))}
      </div>
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}
