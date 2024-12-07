import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signInFormControl, signUpFormControl } from "@/Config";
import CommonForm from "@/components/ui/common-form";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signin");

  function handleTabChange(value) {
    setActiveTab(value);
  }
  return (
    <>
      <div className="auth-page flex flex-col max-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
          <Link to={"/"} className="flex items-center justify-center"></Link>
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl">EduLink</span>
        </header>
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Tabs
            value={activeTab}
            defaultValue="signin"
            onValueChange={handleTabChange}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <CommonForm formControls={signInFormControl} />
            </TabsContent>
            <TabsContent value="signup">
              <CommonForm formControls={signUpFormControl} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
