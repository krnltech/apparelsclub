"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type SizeGuideProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sizeGuideId: string;
};

export function SizeGuide({ open, onOpenChange, sizeGuideId }: SizeGuideProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-full sm:max-w-2xl lg:max-w-4xl max-h-[85vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl">Size Guide</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="trousers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1">
            <TabsTrigger value="trousers">Trousers</TabsTrigger>
            <TabsTrigger value="tops">Tops & Shirts</TabsTrigger>
            <TabsTrigger value="knitwear">Knitwear</TabsTrigger>
            <TabsTrigger value="skirts">Skirts</TabsTrigger>
          </TabsList>

          {/* Trousers Size Guide */}
          <TabsContent value="trousers" className="space-y-4">
            <div className="bg-sky-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>How to measure:</strong> Measure around the natural waistline and the inside leg from crotch to ankle.
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Waist (inches)</TableHead>
                  <TableHead>Inside Leg (inches)</TableHead>
                  <TableHead>Height (cm)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">3-4Y</TableCell>
                  <TableCell>3-4 years</TableCell>
                  <TableCell>20-21"</TableCell>
                  <TableCell>15-17"</TableCell>
                  <TableCell>98-104</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5-6Y</TableCell>
                  <TableCell>5-6 years</TableCell>
                  <TableCell>21-22"</TableCell>
                  <TableCell>17-19"</TableCell>
                  <TableCell>110-116</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">7-8Y</TableCell>
                  <TableCell>7-8 years</TableCell>
                  <TableCell>22-23"</TableCell>
                  <TableCell>19-21"</TableCell>
                  <TableCell>122-128</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">9-10Y</TableCell>
                  <TableCell>9-10 years</TableCell>
                  <TableCell>23-24"</TableCell>
                  <TableCell>21-23"</TableCell>
                  <TableCell>134-140</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">11-12Y</TableCell>
                  <TableCell>11-12 years</TableCell>
                  <TableCell>24-26"</TableCell>
                  <TableCell>23-25"</TableCell>
                  <TableCell>146-152</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">13-14Y</TableCell>
                  <TableCell>13-14 years</TableCell>
                  <TableCell>26-28"</TableCell>
                  <TableCell>25-27"</TableCell>
                  <TableCell>158-164</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">15-16Y</TableCell>
                  <TableCell>15-16 years</TableCell>
                  <TableCell>28-30"</TableCell>
                  <TableCell>27-29"</TableCell>
                  <TableCell>170-176</TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Tops & Shirts Size Guide */}
          <TabsContent value="tops" className="space-y-4">
            <div className="bg-sky-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>How to measure:</strong> Measure around the fullest part of the chest and across the shoulders.
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Chest (inches)</TableHead>
                  <TableHead>Collar (inches)</TableHead>
                  <TableHead>Height (cm)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">3-4Y</TableCell>
                  <TableCell>3-4 years</TableCell>
                  <TableCell>22-23"</TableCell>
                  <TableCell>11.5"</TableCell>
                  <TableCell>98-104</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5-6Y</TableCell>
                  <TableCell>5-6 years</TableCell>
                  <TableCell>24-25"</TableCell>
                  <TableCell>12"</TableCell>
                  <TableCell>110-116</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">7-8Y</TableCell>
                  <TableCell>7-8 years</TableCell>
                  <TableCell>26-27"</TableCell>
                  <TableCell>12.5"</TableCell>
                  <TableCell>122-128</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">9-10Y</TableCell>
                  <TableCell>9-10 years</TableCell>
                  <TableCell>28-29"</TableCell>
                  <TableCell>13"</TableCell>
                  <TableCell>134-140</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">11-12Y</TableCell>
                  <TableCell>11-12 years</TableCell>
                  <TableCell>30-32"</TableCell>
                  <TableCell>13.5"</TableCell>
                  <TableCell>146-152</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">13-14Y</TableCell>
                  <TableCell>13-14 years</TableCell>
                  <TableCell>32-34"</TableCell>
                  <TableCell>14"</TableCell>
                  <TableCell>158-164</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">15-16Y</TableCell>
                  <TableCell>15-16 years</TableCell>
                  <TableCell>34-36"</TableCell>
                  <TableCell>14.5"</TableCell>
                  <TableCell>170-176</TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Knitwear Size Guide */}
          <TabsContent value="knitwear" className="space-y-4">
            <div className="bg-sky-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>How to measure:</strong> Measure around the fullest part of the chest for the best fit.
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Chest (inches)</TableHead>
                  <TableHead>Body Length (inches)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">3-4Y</TableCell>
                  <TableCell>3-4 years</TableCell>
                  <TableCell>22-23"</TableCell>
                  <TableCell>16"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5-6Y</TableCell>
                  <TableCell>5-6 years</TableCell>
                  <TableCell>24-25"</TableCell>
                  <TableCell>17"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">7-8Y</TableCell>
                  <TableCell>7-8 years</TableCell>
                  <TableCell>26-27"</TableCell>
                  <TableCell>18"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">9-10Y</TableCell>
                  <TableCell>9-10 years</TableCell>
                  <TableCell>28-29"</TableCell>
                  <TableCell>19"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">11-12Y</TableCell>
                  <TableCell>11-12 years</TableCell>
                  <TableCell>30-32"</TableCell>
                  <TableCell>21"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">13-14Y</TableCell>
                  <TableCell>13-14 years</TableCell>
                  <TableCell>32-34"</TableCell>
                  <TableCell>23"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">15-16Y</TableCell>
                  <TableCell>15-16 years</TableCell>
                  <TableCell>34-36"</TableCell>
                  <TableCell>24"</TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Skirts Size Guide */}
          <TabsContent value="skirts" className="space-y-4">
            <div className="bg-sky-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>How to measure:</strong> Measure around the natural waistline and the hip at the fullest part.
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Waist (inches)</TableHead>
                  <TableHead>Hip (inches)</TableHead>
                  <TableHead>Length (inches)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">3-4Y</TableCell>
                  <TableCell>3-4 years</TableCell>
                  <TableCell>20-21"</TableCell>
                  <TableCell>22-23"</TableCell>
                  <TableCell>12"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">5-6Y</TableCell>
                  <TableCell>5-6 years</TableCell>
                  <TableCell>21-22"</TableCell>
                  <TableCell>24-25"</TableCell>
                  <TableCell>13"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">7-8Y</TableCell>
                  <TableCell>7-8 years</TableCell>
                  <TableCell>22-23"</TableCell>
                  <TableCell>26-27"</TableCell>
                  <TableCell>14"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">9-10Y</TableCell>
                  <TableCell>9-10 years</TableCell>
                  <TableCell>23-24"</TableCell>
                  <TableCell>28-29"</TableCell>
                  <TableCell>15"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">11-12Y</TableCell>
                  <TableCell>11-12 years</TableCell>
                  <TableCell>24-26"</TableCell>
                  <TableCell>30-32"</TableCell>
                  <TableCell>16"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">13-14Y</TableCell>
                  <TableCell>13-14 years</TableCell>
                  <TableCell>26-28"</TableCell>
                  <TableCell>32-34"</TableCell>
                  <TableCell>17"</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">15-16Y</TableCell>
                  <TableCell>15-16 years</TableCell>
                  <TableCell>28-30"</TableCell>
                  <TableCell>34-36"</TableCell>
                  <TableCell>18"</TableCell>
                </TableRow>
              </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-sm text-amber-900">
            <strong>Tip:</strong> If measurements fall between sizes, we recommend choosing the larger size for growing room.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
