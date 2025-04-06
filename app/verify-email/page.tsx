'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Simulate API call to verify email
        await new Promise((resolve) => setTimeout(resolve, 2000));
        
        if (token) {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
        }
      } catch (error) {
        setVerificationStatus('error');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Email Verification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            {verificationStatus === 'loading' && (
              <>
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-lg font-medium">Verifying your email...</p>
              </>
            )}
            
            {verificationStatus === 'success' && (
              <>
                <CheckCircle2 className="h-12 w-12 text-green-500" />
                <div className="text-center">
                  <p className="text-lg font-medium">Email verified successfully!</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    You can now log in to your account.
                  </p>
                </div>
                <Button
                  className="w-full"
                  onClick={() => router.push('/login')}
                >
                  Continue to Login
                </Button>
              </>
            )}
            
            {verificationStatus === 'error' && (
              <>
                <XCircle className="h-12 w-12 text-destructive" />
                <div className="text-center">
                  <p className="text-lg font-medium">Verification failed</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    The verification link may be invalid or expired.
                  </p>
                </div>
                <div className="space-y-2 w-full">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setVerificationStatus('loading')}
                  >
                    Try Again
                  </Button>
                  <Link href="/login" className="block">
                    <Button variant="ghost" className="w-full">
                      Back to Login
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}